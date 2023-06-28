import { NextFunction, Request, Response } from "express";

const pagination = (req: Request, res: Response, next: NextFunction):void => {
    const queryPage:number = Number(req.query.page)
    const queryPerPage:number = Number(req.query.perPage)

    const page:number = queryPage && queryPage > 1 ? queryPage : 1
    const perPage:number = queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5

    const baseUrl:string = "http://localhost:3000/movies"
    const prevPage:string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    const nextPage:string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    res.locals = {...res.locals, pagination: {
        page: perPage * (page - 1),
        perPage,
        nextPage,
        prevPage
    }}

    return next()
}

export default pagination