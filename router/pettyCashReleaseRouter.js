import express from 'express'
import {getPettyCashRelease, createPettyCashRelease, updatePettyCashRelease} from '../controller/pettyCashReleaseController.js'
const router = express.Router()
import middleware from '../middleware/authMiddleware.js'

router.get('/', middleware,getPettyCashRelease)
router.post('/', middleware, createPettyCashRelease)
router.put('/:id', middleware, updatePettyCashRelease)

export default router