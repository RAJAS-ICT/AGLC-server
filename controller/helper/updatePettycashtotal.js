import PettyCashLiquidation from '../../model/pettyCashLiquidationModel.js';
import PaymentRequestDetail from '../../model/paymentRequestDetailModel.js';

export const updatePettyCashTotal = async (paymentRequestId) => {
  try {
    const details = await PaymentRequestDetail.findAll({
      where: { paymentRequestId }
    });

    const total = details.reduce(
      (sum, d) => sum + (Number(d.amount || 0) * Number(d.quantity || 0)),
      0
    );

    await PettyCashLiquidation.update(
      { totalAmount: total },
      { where: { paymentRequestId } }
    );
  } catch (error) {
    console.error("Error updating PettyCashLiquidation total:", error);
  }
};
