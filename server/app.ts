import {
	collectionRouter,
	compayRouter,
	configurationRouter,
	creditsRouter,
	genresRouter,
	imagesRouter,
	movieRouter,
	peopleRouter,
	reviewsRouter,
	searchRouter,
	tvEpisodeGroupRouter,
	tvEpisodeRouter,
	tvRouter,
	tvSeasonRouter,
} from "./routes";

import cors from "cors";
import express from "express";
import morgan from "morgan";

export const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use("/api/collection", collectionRouter);

app.use("/api/company", compayRouter);

app.use("/api/configuration", configurationRouter);

app.use("/api/credit", creditsRouter);

app.use("/api/genre", genresRouter);

app.use("/api/image", imagesRouter);

app.use("/api/movie", movieRouter);

app.use("/api/person", peopleRouter);

app.use("/api/review", reviewsRouter);

app.use("/api/search", searchRouter);

app.use("/api/tv", tvRouter);

app.use("/api/tv-season", tvSeasonRouter);

app.use("/api/tv-episode", tvEpisodeRouter);

app.use("/api/tv-episode-groups", tvEpisodeGroupRouter);
