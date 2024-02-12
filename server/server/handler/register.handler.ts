import { ResponseErrorCodes, ServerResponse, loginFormSchema } from '@models';
import { Elysia } from 'elysia';
import { OpenAPIV3 } from 'openapi-types';
import { fromZodError } from 'zod-validation-error';

const openAPI: OpenAPIV3.OperationObject = {
  description: 'Register start',
  summary: 'Register start',
  responses: {
    '200': {
      description: 'OK'
    }
  }
};

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