import { Elysia } from 'elysia';
import { version } from '../../../../package.json';
import { ServerResponse } from '@models';
import { openAPI } from './version.openapi';



export function getVersionHandler() {
  return new Elysia()
    .get('/version', (): ServerResponse<string> => {
      return {
        success: true,
        data: version
      }
    }, {
      detail: openAPI
    });
}