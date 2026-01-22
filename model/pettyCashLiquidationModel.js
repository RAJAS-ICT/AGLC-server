import {DataTypes} from 'sequelize'
import {sequelize} from '../config/conn.js'
import PaymentRequest from './paymentRequestModel.js'

const PettyCashLiquidation = sequelize.define(
  "pettyCashLiquidation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paymentRequestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PaymentRequest,
        key: "id"
      }
    },
    totalAmount: {
      type: DataTypes.DECIMAL(12, 2),
    }
  },
  { tableName: "pettyCashLiquidation" }
);

export default PettyCashLiquidation