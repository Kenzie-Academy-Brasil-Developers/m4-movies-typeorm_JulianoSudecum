import { Repository } from 'typeorm';
import { Pagination, PaginationParams } from './../interfaces/pagination.interfaces';
import { AppDataSource } from './../data-source';
import { Movie } from '../entities';
import { MovieCreate, MovieRead, MovieRepo, MovieUpdate } from './../interfaces/movies.interfaces';

export const create = async(payload:any):Promise<any> => {
    const repo:MovieRepo = AppDataSource.getRepository(Movie)
    const movie = repo.create(payload)
    await repo.save(movie)

    return movie
}

export const read = async({page, perPage, order, sort, prevPage, nextPage}: PaginationParams):Promise<Pagination> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)

    const [movies, count]:[Movie[], number] = await repo.findAndCount({
        order: { [sort]: order },
        skip: page,
        take: perPage
    })

    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: movies
    }
}

export const update = async(movieId:number, payload:MovieUpdate):Promise<Movie> => {
    const repo:any = AppDataSource.getRepository(Movie)
    const movieUpdated:Movie | null = await repo.findOneBy({id: movieId})

    return await repo.save({...movieUpdated, ...payload})
}

export const destroy = async(movieId: number):Promise<void> => {
    const repo:any = AppDataSource.getRepository(Movie)
    const movieDelete:Movie | null = await repo.findOneBy({id: movieId})
    
    await repo.remove(movieDelete)
}
