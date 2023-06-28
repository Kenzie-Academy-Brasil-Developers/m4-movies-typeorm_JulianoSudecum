import { verifyNameExists } from './../middlewares/verifyNameExists.middleware';
import { moviesCreateSchema, moviesUpdateSchema } from './../schemas/movies.schemas';
import { verifyIdExists } from './../middlewares/verifyIdExists.middleware';
import { validateBody } from './../middlewares/validateBody.middleware';
import { createController, destroyController, readController, updateController } from './../controllers/movie.controller';
import { Router } from "express";
import pagination from '../middlewares/pagination.middleware';

export const moviesRouter:Router = Router()

moviesRouter.post("", verifyNameExists, validateBody(moviesCreateSchema), createController)
moviesRouter.get("", pagination, readController)

moviesRouter.use("/:id", verifyIdExists)

moviesRouter.patch("/:id", verifyNameExists, validateBody(moviesUpdateSchema), updateController)
moviesRouter.delete("/:id", destroyController)