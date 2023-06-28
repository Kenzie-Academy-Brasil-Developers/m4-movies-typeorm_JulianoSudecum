import { moviesCreateSchema, moviesUpdateSchema } from './../schemas/movies.schemas';
import { verifyIdExists } from './../middlewares/verifyIdExists.middleware';
import { validateBody } from './../middlewares/validateBody.middleware';
import { createController, destroyController, readController, updateController } from './../controllers/movie.controller';
import { Router } from "express";
import pagination from '../middlewares/pagination.middleware';

export const moviesRouter:Router = Router()

moviesRouter.post("",validateBody(moviesCreateSchema) ,createController)
moviesRouter.get("", pagination, readController)

moviesRouter.use(verifyIdExists)

moviesRouter.patch("/:id", validateBody(moviesUpdateSchema), updateController)
moviesRouter.delete("/:id", destroyController)