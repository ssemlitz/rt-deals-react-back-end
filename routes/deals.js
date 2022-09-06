import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', dealsCtrl.index)
router.get('/:id', dealsCtrl.show)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, dealsCtrl.create)
router.delete('/:id', checkAuth, dealsCtrl.delete)
router.put('/:id', checkAuth, dealsCtrl.update)

export {
  router
}