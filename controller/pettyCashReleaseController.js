import PettyCash from '../model/pettyCashReleaseModel.js'
import PaymentRequest from '../model/paymentRequestModel.js'
import Employee from '../model/employeeModel.js'

export const getPettyCashRelease = async(req,res)=>{
    try {
        const result = await PettyCash.findAll({
            include: [
                {model:PaymentRequest, as:'paymentRequest'},
                {model:Employee, as: 'employee'}
            ]
        })
        res.status(200).json(result)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const createPettyCashRelease = async (req, res) => {
  try {
    const { paymentRequestId, receivedById } = req.body;

    const result = await PettyCash.create({
      paymentRequestId,
      receivedById
    });

    await PaymentRequest.update(
      { status: 'Released' },
      { where: { id: paymentRequestId } }
    );

    res.status(201).json({ message: 'Petty Cash Released!', data: result });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
