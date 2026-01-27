import PettyCashLiquidation from '../model/pettyCashLiquidationModel.js'
import PaymentRequest from '../model/paymentRequestModel.js'
import PettyCashLiquidationDetail from '../model/pettyCashLiquidationDetail.js'
import PaymentRequestDetail from '../model/paymentRequestDetailModel.js'


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

export const fetchPettyCashLiquidationDetailByLiquidationId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PettyCashLiquidationDetail.findAll({
      where: { pettyCashLiquidationId: id },
      include: [
        { model: PettyCashLiquidation, as: 'pettyCashLiquidation' },
        { model: PaymentRequestDetail, as: 'paymentRequestDetail' }
      ]
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching liquidation details:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



export const createPettyCashLiquidationDetail = async (req, res) => {
  try {
    const { pettyCashLiquidationId, paymentRequestDetailId, liquidatedAmount, returnRefundAmount } = req.body;

    if (!liquidatedAmount && liquidatedAmount !== 0) {
      return res.status(400).json({ message: "Liquidated amount is required." });
    }

    const result = await PettyCashLiquidationDetail.create({
      pettyCashLiquidationId,
      paymentRequestDetailId,
      liquidatedAmount,
      returnRefundAmount
    });

    res.status(201).json({ message: "Created Successfully.", data: result });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
