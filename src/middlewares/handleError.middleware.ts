import { AppError } from './../errors/App.error';
import { NextFunction, Request, Response } from "express";
import { ZodError } from 'zod';

export const handleError = (err: unknown, req: Request, res: Response, next: NextFunction): Response => {

    if(err instanceof ZodError){
        return res.status(400).json({message: err.flatten().fieldErrors})
    }

    if(err instanceof AppError){
        return res.status(err.status).json({message: err.message})
    }

    console.log(err)
    return res.status(500).json({message: "Internal Server Error"})
}