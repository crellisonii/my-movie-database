import { json, urlencoded } from 'body-parser';

import { collectionRouter } from "./routes";
import express from 'express';
import morgan from 'morgan';

export const app = express();

app.use(morgan('dev'));

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/collection', collectionRouter)