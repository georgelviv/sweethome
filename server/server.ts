const port: number = Number(process.env.PORT);

export function initServer(): void {
  Bun.serve({
    port: port,
    fetch() {
      return new Response('Hello from bun server');
    },
    error(error) {
      return new Response(`<pre>${error}\n${error.stack}</pre>`, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    },
    tls: {
      key: Bun.file('./certs/key.pem'),
      cert: Bun.file('./certs/cert.pem'),
      passphrase: process.env.CERT_PASSPHRASE
    }
  })
}