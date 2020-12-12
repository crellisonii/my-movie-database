import {
  collectionRouter,
  creditsRouter,
  genresRouter,
  movieRouter,
  peopleRouter,
  reviewsRouter
} from "./routes";
import { json, urlencoded } from 'body-parser';

import express from 'express';
import morgan from 'morgan';

export const app = express();

app.use(morgan('dev'));

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/collection', collectionRouter);
app.use('/credit', creditsRouter);
app.use('/genre', genresRouter);
app.use('/movie', movieRouter);
app.use('/person', peopleRouter);
app.use('/review', reviewsRouter);