/* eslint-disable @typescript-eslint/no-var-requires */
// Main Entry point of app
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT ? process.env.PORT : 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // Route Everything else through Next.js directly
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
