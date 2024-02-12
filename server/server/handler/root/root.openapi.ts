import { OpenAPIV3 } from 'openapi-types';

export const openAPI: OpenAPIV3.OperationObject = {
  description: 'Returns static index.html',
  summary: 'Static index.html',
  responses: {
    '200': {
      description: 'OK'
    }
  }
};