import express from 'express'
import {getDataLocalGovernmentAgency,postDataLocalGovernmentAgency,putDataLocalGovernmentAgency, getDataLocalGovernmentAgencyById} from '../controller/localGovernmentAgencyController.js'
import middleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', middleware, getDataLocalGovernmentAgency)
router.get('/:id', middleware, getDataLocalGovernmentAgencyById)
router.post('/', middleware, postDataLocalGovernmentAgency)
router.put('/:id', middleware, putDataLocalGovernmentAgency)

export default router