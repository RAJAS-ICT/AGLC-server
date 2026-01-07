import express from 'express'
import {getDataBanks, postDataBanks, putDataBanks} from '../controller/banksController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getDataBanks)
router.post('/', middleware, postDataBanks)
router.put('/:id', middleware, putDataBanks)

export default router