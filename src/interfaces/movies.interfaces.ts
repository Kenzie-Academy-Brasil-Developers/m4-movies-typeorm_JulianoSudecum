import { moviesCreateSchema } from "../schemas/movies.schemas";
import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";

export type MovieCreate = z.infer<typeof moviesCreateSchema>
export type MovieRead = Array<Movie>
export type MovieUpdate = DeepPartial<MovieCreate>
export type MovieRepo = Repository<Movie>