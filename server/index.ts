import { graphqlRouter, personRouter } from "./routes";
import { json, urlencoded } from 'body-parser';

import express from 'express';
import morgan from 'morgan';
import { serverPort } from "./env";

const port = serverPort || 4000;

const app = express();

app.use(morgan('dev'));

app.use(urlencoded({ extended: false }))
app.use(json());

app.use('/person', personRouter);

app.listen(port, () => {
  console.log(
    `Server is running and listening at http://localhost:${port}`
  );
});