import { ResponseErrorCodes, ServerResponse, loginFormSchema } from '@models';
import { Elysia } from 'elysia';
import { fromZodError } from 'zod-validation-error';
import { openAPI } from './register.openapi';

export function getRegisterHandler() {
  return new Elysia()
  .post('/register-start', ({body, set}): ServerResponse => {
    const parseResult = loginFormSchema.safeParse(body);
    console.log(body);

    if (!parseResult.success) {
      set.status = 422;
      const errorMsg: string = fromZodError(parseResult.error).toString();
      return {
        success: false,
        errorCode: ResponseErrorCodes.bodyValidationError,
        errorMsg
      };
    }

    return {
      success: true
    };
  }, {
    detail: openAPI
  })
}