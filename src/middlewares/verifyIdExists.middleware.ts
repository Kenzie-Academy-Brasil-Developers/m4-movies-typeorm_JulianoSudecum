import { AppError } from './../errors/App.error';
import { AppDataSource } from './../data-source';
import { MovieRepo } from './../interfaces/movies.interfaces';
import { NextFunction, Request, Response } from "express";
import { Movie } from '../entities';

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    
    const movieId:number = Number(req.params.id)
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    const movie:Movie | null = await repo.findOneBy({id: movieId})

    if(!movie) throw new AppError("Movie not found", 404)
    
    return next()
}