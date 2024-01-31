import { getHandler } from './handler';

const port: number = Number(process.env.PORT);
const sslPassphrase: string = process.env.SSL_PASSPHRASE as string;



export function initServer(): void {
  const app = getHandler();

  const key = Bun.file('./certs/key.pem');
  const cert = Bun.file('./certs/cert.pem');

  Bun.serve({
    port: port,
    fetch(request) {
      return app.handle(request);
    },
    error(error) {
      return new Response(`<pre>${error}\n${error.stack}</pre>`, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    },
    tls: {
      key,
      cert,
      passphrase: sslPassphrase
    }
  });

  console.log(`Server started at ${port} port`)
}