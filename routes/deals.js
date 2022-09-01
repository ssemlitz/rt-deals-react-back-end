import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', dealsCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, dealsCtrl.create)
router.delete('/:id', checkAuth, dealsCtrl.delete)

export {
  router
}