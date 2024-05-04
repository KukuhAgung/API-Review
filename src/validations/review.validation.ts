import Joi from 'joi'

interface ReviewInterface {
  name: string
  rating: number
  description: string
}

export const createReviewValidation = (payload: ReviewInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    rating: Joi.number().required(),
    description: Joi.string().allow('', null)
  })

  return schema.validate(payload)
}
