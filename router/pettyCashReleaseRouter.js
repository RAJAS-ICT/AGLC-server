import express from 'express'
import {getPettyCashRelease, createPettyCashRelease} from '../controller/pettyCashReleaseController.js'
const router = express.Router()

router.get('/', getPettyCashRelease)
router.post('/', createPettyCashRelease)

export default router