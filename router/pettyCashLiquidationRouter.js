import express from 'express'
import {
    fetchPettyCashLiquidation, 
    fetchPettyCashLiquidationById, 
    createPettyCashLiquidation, 
    updatePettyCashLiquidation,
    fetchPettyCashLiquidationDetailByLiquidationId,
    createPettyCashLiquidationDetail,
    updatePettyCashLiquidationDetail
} from '../controller/pettyCashLiquidationController.js'
const router = express.Router()


router.get('/', fetchPettyCashLiquidation)
router.get('/:id', fetchPettyCashLiquidationById)
router.post('/', createPettyCashLiquidation)
router.put('/:id', updatePettyCashLiquidation)

//PettyCashLiquidationDetail Router
router.get('/detail/:id', fetchPettyCashLiquidationDetailByLiquidationId)
router.post('/detail', createPettyCashLiquidationDetail)
router.put('/detail/:id', updatePettyCashLiquidationDetail)

export default router