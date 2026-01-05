import express from 'express'
import {getDataAffiliate,postDataAffiliate,putDataAffiliate} from '../controller/affiliatesController.js'


const router = express.Router()

router.get('/', getDataAffiliate)
router.post('/', postDataAffiliate)
router.put('/:id', putDataAffiliate)

export default router

