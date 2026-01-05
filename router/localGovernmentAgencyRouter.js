import express from 'express'
import {getDataLocalGovernmentAgency,postDataLocalGovernmentAgency,putDataLocalGovernmentAgency} from '../controller/localGovernmentAgencyController.js'
const router = express.Router()

router.get('/', getDataLocalGovernmentAgency)
router.post('/', postDataLocalGovernmentAgency)
router.put('/:id', putDataLocalGovernmentAgency)

export default router