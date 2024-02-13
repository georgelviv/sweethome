import { ResponseErrorCodes } from '@models';
import { OpenAPIV3 } from 'openapi-types';

export const openAPI: OpenAPIV3.OperationObject = {
  description: 'Register start',
  tags: ['App'],
  summary: 'Register start',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'dekster'
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'dekster@gmail.com'
            }
          }
        }
      }
    }
  },
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
                example: true,
              },
              data: {
                type: 'object',
                properties: {
                  challenge: {
                    type: 'string',
                    example: '83VWTqb5gPEOasVQZo6TKw'
                  }
                }
              }
            },
          }
        }
      }
    },
    '422': {
      description: 'Not valid body',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              success: {
                type: 'boolean',
                example: false
              },
              errorCode: {
                type: 'string',
                example: ResponseErrorCodes.bodyValidationError
              },
              errorMsg: {
                type: 'string',
                example: 'Validation error: Should have valid email at \"email\"'
              }
            },
          }
        }
      }
    }
  }
};