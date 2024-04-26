import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
export const ReviewRouter: Router = Router()

ReviewRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Get Reviews')
  res.status(200).send({ status: 'OK' })
})
ReviewRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Post Review')
  res.status(200).send({ status: true, statuscode: 200, data: req.body })
})
