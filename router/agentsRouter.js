import express from 'express'
import {getDataAgents, postDataAgents, putDataAgents} from '../controller/agentsController.js'
const router = express.Router()

router.get('/', getDataAgents)
router.post('/', postDataAgents)
router.put('/:id', putDataAgents)


export default router