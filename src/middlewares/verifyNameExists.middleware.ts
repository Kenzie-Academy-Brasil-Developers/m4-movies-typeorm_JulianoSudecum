import { AppError } from './../errors/App.error';
import { AppDataSource } from './../data-source';
import { MovieRepo } from './../interfaces/movies.interfaces';
import { NextFunction, Request, Response } from "express";
import { Movie } from '../entities';

export const verifyNameExists = async (req: Request, res: Response, next: NextFunction) => {
    
    const { name } = req.body
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    const movie:Movie | null = await repo.findOneBy({name: name})

    if(movie){
        return res.status(409).json({message: "Movie already exists."})
    }
    
    return next()
}