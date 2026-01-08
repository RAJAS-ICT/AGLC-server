import express from 'express'
import {getDataAgents, getDataAgentsById, postDataAgents, putDataAgents} from '../controller/agentsController.js' 
import middleware from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/', middleware, getDataAgents)
router.get('/:id', middleware, getDataAgentsById)
router.post('/', middleware, postDataAgents)
router.put('/:id', middleware, putDataAgents)


export default router