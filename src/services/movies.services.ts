import { AppDataSource } from './../data-source';
import { Movie } from '../entities';
import { MovieCreate, MovieRead, MovieRepo, MovieUpdate } from './../interfaces/movies.interfaces';

export const create = async(payload:any) => {
    const repo = AppDataSource.getRepository(Movie)
    const movie = repo.create(payload)
    await repo.save(movie)

    return movie
}

export const read = async():Promise<MovieRead> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    return await repo.find()
}

export const update = async(movie:any, payload:any) => {
    const repo = AppDataSource.getRepository(Movie)
    const movieUpdated = repo.create({...movie, ...payload})
    await repo.save(movieUpdated)

    return movieUpdated
}

export const destroy = async(movie: Movie) => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie)
    await repo.remove(movie)
}
