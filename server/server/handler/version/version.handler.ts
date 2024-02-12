import { Elysia, t } from 'elysia';
import { version } from '../../../../package.json';
import { openAPI } from './version.openapi';
import { responseSchema } from './version.schemas';

export function getVersionHandler() {
  return new Elysia()
    .get('/version', () => {
      return {
        success: true,
        data: version
      }
    }, {
      detail: openAPI,
      response: responseSchema
    });
}