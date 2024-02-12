import { Elysia } from 'elysia';
import { version } from '../../../package.json';
import { OpenAPIV3 } from 'openapi-types';

const openAPI: OpenAPIV3.OperationObject = {
  description: 'Returns SweetHome Api Version',
  summary: 'API version',
  responses: {
    '200': {
      description: 'OK',
      content: {
        'text/plain': {
          schema: {
            type: 'string',
            example: '0.0.8'
          }
        }
      }
    }
  }
};

export function getVersionHandler() {
  return new Elysia()
    .get('/version', () => version, {
      detail: openAPI
    });
}