import { Application, Router } from 'express'
import { ReviewRouter } from './review'

const _routes: Array<[string, Router]> = [["'/review'", ReviewRouter]]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [path, router] = route
    app.use(path, router)
  })
}
