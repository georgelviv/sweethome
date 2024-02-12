import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static';
import { swagger } from '@elysiajs/swagger';
import { version } from '../../../package.json';
import { getRegisterHandler } from './register';
import { getVersionHandler } from './version';
import { getRootHandler } from './root';

export function getHandler(): Elysia {
  return new Elysia()
    .use(swagger({
      provider: 'swagger-ui',
      documentation: {
        info: {
          title: 'Sweet Home',
          description: 'Sweet Home API Documentation',
          version
        },
        tags: [
          {
            name: 'App', description: 'General Endpoints'
          }
        ]
      },
      swaggerOptions: {
        
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