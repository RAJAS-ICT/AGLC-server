import express from 'express'
import {getPaymentRequestDetail, getPaymentRequestDetailById, postPaymentRequestDetail,updatePaymentRequestDetail,getPaymentRequestDetailsByRequestId} from '../controller/paymentRequestDetailController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getPaymentRequestDetail)
router.get('/:id', middleware, getPaymentRequestDetailById)
router.get('/request/:paymentRequestId', middleware, getPaymentRequestDetailsByRequestId)
router.post('/', middleware, postPaymentRequestDetail)
router.put('/:id', middleware, updatePaymentRequestDetail)

export default router