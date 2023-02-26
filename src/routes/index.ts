import { Router } from 'express'
import countryRoutes from './country.routes'
import holidayRoutes from './holiday.routes'
import meetingRoutes from './meeting.routes'
import testRoutes from './test.routes'

const router = Router()

export default () => {
  router.use('/countries', countryRoutes)
  router.use('/holidays', holidayRoutes)
  router.use('/meetings', meetingRoutes)
  router.use('/test', testRoutes)

  return router
}
