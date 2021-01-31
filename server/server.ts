import { app } from './app';
import { serverPort } from './env';

const port = serverPort || 4000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});