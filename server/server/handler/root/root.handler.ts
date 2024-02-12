import { Elysia } from 'elysia';
import { openAPI } from './root.openapi';

export function getRootHandler() {
  return new Elysia()
    .get('/', () => Bun.file('dist/index.html'), {
        detail: openAPI
    });
}