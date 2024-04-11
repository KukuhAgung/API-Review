import { Router, Request, Response, NextFunction } from 'express'

export const ReviewRouter: Router = Router()

ReviewRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        name: 'Andi Yanto',
        rating: 4.5,
        comment: 'Di jamin bersih, kinclong'
      }
    ]
  })
})
