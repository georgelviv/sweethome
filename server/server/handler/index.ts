import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static';
import { swagger } from '@elysiajs/swagger';
import { version } from '../../../package.json';
import { getRegisterHandler } from './register.handler';
import { getVersionHandler } from './version.handler';
import { getRootHandler } from './root.handler';

export function getHandler(): Elysia {
  return new Elysia()
    .use(swagger({
      documentation: {
        info: {
            title: 'Sweet Home API Documentation',
            version
        }
    }
    }))
    .use(cors({
      origin: /localhost:5173$/
    }))
    .use(staticPlugin({
      assets: 'dist', prefix: ''
    }))
    .use(getVersionHandler())
    .use(getRegisterHandler())
    .use(getRootHandler());
}