import PettyCashLiquidation from '../model/pettyCashLiquidationModel.js'
import PaymentRequest from '../model/paymentRequestModel.js'

export const fetchPettyCashLiquidation = async(req,res)=>{
    try {
        const result = await PettyCashLiquidation.findAll({
            include: [
                {model: PaymentRequest, as:'paymentRequest'}
            ]
        })
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}

export const fetchPettyCashLiquidationById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await PettyCashLiquidation.findByPk(id,{
            include:[
                {model:PaymentRequest, as:'paymentRequest'}
            ]
        })
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:'Internal Server Error', error: error.message})
    }
}

export const createPettyCashLiquidation = async(req,res)=>{
    try {
        const {paymentRequestId, totalAmount} = req.body
        const result = await PettyCashLiquidation.create({
            paymentRequestId,
            totalAmount
        })
        res.status(201).json({message:'Created Successfully.', data:result})
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:'Internal Server Error', error: error.message})
    }
}

export const updatePettyCashLiquidation = async(req,res)=>{
    try {
        const {id} = req.params
        const {paymentRequestId, totalAmount} = req.body

        const result = await PettyCashLiquidation.findByPk(id)
        if(!result)  return res.status(404).json({message: 'Pettycash Liquidation not found.'})

        result.paymentRequestId = paymentRequestId ?? result.paymentRequestId
        result.totalAmount = totalAmount ?? result.totalAmount

        await result.save()

        res.status(200).json({message:'Updated Successfully.'})
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:'Internal Server Error.', error: error.message})
    }
}

//pettycash liquidation detail

export const getPettyCashLiquidationDetail = async(req,res)=>{
    try {
        
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:'Internal Server Error: ', error: error.messsage})
    }
}


export const createPettyCashLiquidationDetail = async(req,res)=>{
    try {
        
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message: 'Internal Server Error', error: error.message})
    }
}