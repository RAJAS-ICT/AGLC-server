import express from 'express'
import {fetchPettyCashLiquidation, fetchPettyCashLiquidationById, createPettyCashLiquidation, updatePettyCashLiquidation} from '../controller/pettyCashLiquidationController.js'
const router = express.Router()


router.get('/', fetchPettyCashLiquidation)
router.get('/:id', fetchPettyCashLiquidationById)
router.post('/', createPettyCashLiquidation)
router.put('/:id', updatePettyCashLiquidation)

export default router