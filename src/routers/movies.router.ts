import { createController, destroyController, readController, updateController } from './../controllers/movie.controller';
import { Router } from "express";

export const moviesRouter:Router = Router()

moviesRouter.post("", createController)
moviesRouter.get("", readController)

moviesRouter.patch("/:id", updateController)
moviesRouter.delete("/:id", destroyController)