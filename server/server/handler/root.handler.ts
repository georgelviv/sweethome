import { Elysia } from 'elysia';
import { OpenAPIV3 } from 'openapi-types';

const openAPI: OpenAPIV3.OperationObject = {
  description: 'Returns static index.html',
  summary: 'Static index.html',
  responses: {
    '200': {
      description: 'OK'
    }
  }
};

export function getRootHandler() {
  return new Elysia()
    .get('/', () => Bun.file('dist/index.html'), {
        detail: openAPI
    });
}