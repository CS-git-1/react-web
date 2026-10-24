// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 5173
server.listen(5173, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:5173');
});

// run with `node server.mjs`