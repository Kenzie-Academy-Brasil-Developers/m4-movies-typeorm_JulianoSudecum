import { MovieRead } from './movies.interfaces';
import { Movie } from "../entities"

export interface Pagination{
    prevPage: string | null
    nextPage: string | null
    count: number
    data: Array<Movie>
}

export interface PaginationParams{
    page: number
    perPage: number
    prevPage: string | null
    nextPage: string | null
}