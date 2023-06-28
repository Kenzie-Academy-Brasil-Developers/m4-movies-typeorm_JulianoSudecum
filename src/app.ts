import { handleError } from './middlewares/handleError.middleware';
import { moviesRouter } from './routers/movies.router';
import express, { Application, json } from "express";

const app:Application = express()

app.use(json())

app.use(handleError)

app.use("/movies", moviesRouter)

export default app