import { app } from './app';
import http from 'http';
import { serverPort } from './env';

const port = serverPort || 4000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});