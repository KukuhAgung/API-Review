import { Request, Response } from 'express'
import { createReviewValidation } from '../validations/review.validation'
import { logger } from '../utils/logger'

export const getReview = (req: Request, res: Response) => {
  const reviews = [
    {
      name: 'Eko',
      rating: 3,
      description: 'Lama banget nyucinya'
    },
    { name: 'Imam', rating: 4, description: 'Mantap Murah Cepat' }
  ]
  const {
    params: { name }
  } = req
  if (name) {
    const filterReview = reviews.filter((review) => {
      if (review.name === name) return review
    })
    if (filterReview.length === 0) {
      logger.info('Review Not Found!')
      return res.status(404).send({
        status: false,
        statuscode: 404,
        message: 'Review Not Found!',
        data: {}
      })
    }
    logger.info('Success Get Review')
    return res.status(200).send({
      status: true,
      statuscode: 200,
      message: 'Get Reviews Success',
      data: filterReview[0]
    })
  }
  logger.info('Get Reviews')
  return res.status(200).send({
    status: true,
    statuscode: 200,
    message: 'Get Reviews Success',
    data: reviews
  })
}
export const createReview = (req: Request, res: Response) => {
  const { error, value } = createReviewValidation(req.body)
  if (error) {
    logger.error('ERROR = product - create', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, data: {}, message: error.details[0].message })
  }
  logger.info('Success Add Review')
  return res.status(200).send({ status: true, statuscode: 200, message: 'Add Review Success', data: value })
}
