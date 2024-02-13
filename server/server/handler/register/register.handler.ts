import { ResponseErrorCodes, ServerResponse, ServerResponseRegisterStart, loginFormSchema } from '@models';
import { Elysia } from 'elysia';
import { fromZodError } from 'zod-validation-error';
import { openAPI } from './register.openapi';
import crypto from 'node:crypto';
import { promisify } from 'node:util';

const randomBytesPromised = promisify(crypto.randomBytes);

function getRegisterStart() {
  return new Elysia()
    .post('/start', async ({ body, set }): Promise<ServerResponseRegisterStart> => {
      const parseResult = loginFormSchema.safeParse(body);

      if (!parseResult.success) {
        set.status = 422;
        const errorMsg: string = fromZodError(parseResult.error).toString();
        return {
          success: false,
          errorCode: ResponseErrorCodes.bodyValidationError,
          errorMsg
        };
      }

      const challenge: Buffer = await randomBytesPromised(16);

      return {
        success: true,
        data: {
          challenge: challenge.toString('base64url')
        }
      };
    }, {
      detail: openAPI
    })
}


export function getRegisterHandler() {
  return new Elysia().group('/register', (app) => {
    return app
      .use(getRegisterStart());
  })
}