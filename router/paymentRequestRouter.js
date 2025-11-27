import express from 'express'
import {getPaymentRequest, getPaymentRequestById, postPaymentRequest, updatePaymentRequest, destroyPaymentRequest, destroyPaymentRequestDetails} from '../controller/paymentRequestController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getPaymentRequest)
router.get('/:id', middleware, getPaymentRequestById)
router.post('/', middleware, postPaymentRequest)
router.put('/:id',middleware, updatePaymentRequest)
router.delete('/:id',middleware, destroyPaymentRequest)
router.delete('/details/:id',middleware, destroyPaymentRequestDetails)

export default router