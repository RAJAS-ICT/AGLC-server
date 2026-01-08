import express from 'express'
import {getDataBanks, getDataBanksById, postDataBanks, putDataBanks} from '../controller/banksController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getDataBanks)
router.get('/:id', middleware, getDataBanksById)
router.post('/', middleware, postDataBanks)
router.put('/:id', middleware, putDataBanks)

export default router