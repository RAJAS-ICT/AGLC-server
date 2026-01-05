import express from 'express'
import {getDataBanks, postDataBanks, putDataBanks} from '../controller/banksController.js'

const router = express.Router()

router.get('/', getDataBanks)
router.post('/', postDataBanks)
router.put('/:id', putDataBanks)

export default router