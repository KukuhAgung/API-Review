import { Application, Router } from 'express'
import { ReviewRouter } from './review.route'

const _routes: Array<[string, Router]> = [['/review', ReviewRouter]]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
