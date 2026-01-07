import express from 'express'
import {getDataLocalGovernmentAgency,postDataLocalGovernmentAgency,putDataLocalGovernmentAgency} from '../controller/localGovernmentAgencyController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getDataLocalGovernmentAgency)
router.post('/', middleware, postDataLocalGovernmentAgency)
router.put('/:id', middleware, putDataLocalGovernmentAgency)

export default router