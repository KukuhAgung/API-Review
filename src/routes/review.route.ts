import { Router } from 'express'
import { createReview, getReview } from '../controllers/review.controller'

export const ReviewRouter: Router = Router()

ReviewRouter.get('/', getReview)
ReviewRouter.get('/:name', getReview)
ReviewRouter.post('/', createReview)
