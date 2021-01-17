import { Request, Response, NextFunction } from 'express'

export const notFoundHandler = (
    request: Request,
    response: Response,
    next: NextFunction
) : Response => {
    const message = 'Resource not found'
    
    return response.status(404).send(message)
}
