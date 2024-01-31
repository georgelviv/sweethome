import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { version } from '../package.json';

export function getHandler(): Elysia {
  return new Elysia()
    .use(staticPlugin({
      assets: 'dist', prefix: ''
    }))
    .get('/', () => Bun.file('dist/index.html'))
    .get('/version', () => version);
}