import { OpenAPIV3 } from 'openapi-types';

export const openAPI: OpenAPIV3.OperationObject = {
  description: 'Returns SweetHome Api Version',
  summary: 'API version',
  responses: {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: {
                type: 'boolean',
                example: true
              },
              data: {
                type: 'string',
                example: '0.0.8'
              }
            },
          }
        }
      }
    }
  }
};