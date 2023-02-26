import { Router, Request, Response } from 'express'
import httpCodes from '../enums/httpCodes'

const router = Router()

router.all('/status', (_req: Request, res: Response) => {
  res.status(httpCodes.OK).send('Ok ✔')
})

export default router
