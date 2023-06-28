import { AppError } from './../errors/App.error';
import { AppDataSource } from './../data-source';
import { MovieRepo } from './../interfaces/movies.interfaces';
import { NextFunction, Request, Response } from "express";
import { Movie } from '../entities';

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const repo:MovieRepo = AppDataSource.getRepository(Movie)
    const id:number = Number(req.params.id)

    const movieExists: boolean = await repo.exist({where: { id } })
    if(!movieExists) throw new AppError("Movie not found", 404)

    res.locals = {...res.locals, movie: movieExists}

    return next()
}