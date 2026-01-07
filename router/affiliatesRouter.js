import express from 'express'
import {getDataAffiliate,postDataAffiliate,putDataAffiliate} from '../controller/affiliatesController.js'
import middleware from '../middleware/authMiddleware.js'


const router = express.Router()

router.get('/', middleware, getDataAffiliate)
router.post('/', middleware, postDataAffiliate)
router.put('/:id', middleware, putDataAffiliate)

export default router

