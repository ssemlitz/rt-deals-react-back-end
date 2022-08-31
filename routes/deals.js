import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, dealsCtrl.create)

export {
  router
}