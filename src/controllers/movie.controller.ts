import { Pagination } from './../interfaces/pagination.interfaces';
import { MovieRead, MovieUpdate } from './../interfaces/movies.interfaces';
import { Request, Response } from "express"
import { Movie } from "../entities"
import { create, destroy, read, update } from "../services/movies.services"

export const createController = async(req: Request, res:Response):Promise<Response> => {
    const movie = await create(req.body)
    return res.status(201).json(movie)
}

export const readController = async(req: Request, res:Response):Promise<Response> => {
    
    const pagination:Pagination = await read(res.locals.pagination)
    return res.status(200).json(pagination)
}

export const updateController = async(req: Request, res:Response):Promise<Response> => {
    const movieId = parseInt(req.params.id)
    const movie:MovieUpdate = await update(movieId, req.body)

    return res.status(200).json(movie)
}

export const destroyController = async(req: Request, res:Response):Promise<Response> => {
    await destroy(parseInt(req.params.id))
    return res.status(204).json()
}
