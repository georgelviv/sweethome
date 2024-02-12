import { OpenAPIV3 } from 'openapi-types';

export const openAPI: OpenAPIV3.OperationObject = {
  description: 'Returns static index.html',
  summary: 'Static index.html',
  tags: ['App'],
  responses: {
    '200': {
      description: 'OK'
    }
  }
};