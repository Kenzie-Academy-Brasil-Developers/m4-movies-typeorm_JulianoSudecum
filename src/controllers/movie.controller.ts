import { MovieRead, MovieUpdate } from './../interfaces/movies.interfaces';
import { Request, Response } from "express"
import { Movie } from "../entities"
import { create, destroy, read, update } from "../services/movies.services"

export const createController = async(req: Request, res:Response):Promise<Response> => {
    const movie = await create(req.body)
    return res.status(201).json(movie)
}

export const readController = async(req: Request, res:Response):Promise<Response> => {
    const movie:MovieRead = await read()
    return res.status(200).json(movie)
}

export const updateController = async(req: Request, res:Response):Promise<Response> => {
    const movie = await update(res.locals.movie, req.body)
    return res.status(200).json(movie)
}

export const destroyController = async(req: Request, res:Response):Promise<Response> => {
    await destroy(res.locals.movie)
    return res.status(204).json()
}
