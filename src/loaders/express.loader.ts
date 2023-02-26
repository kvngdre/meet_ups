import config from '../config/config'
import cors from 'cors'
import errorMiddleware from '../middleware/error.middleware'
import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import NotFoundError from '../errors/NotFoundError'
import routes from '../routes'

const { api } = config

export default function (app: Application) {
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(cors())

  app.use(express.json())

  app.use(api.prefix + api.version, routes())

  // Handle Page 404 error
  app.use((req, res, next) => {
    const err = new NotFoundError('Resource not found.')
    next(err)
  })

  // Global error middleware
  app.use(errorMiddleware)
}
