import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";
import PaymentRequest from './paymentRequestModel.js'
import Employee from './employeeModel.js'

const pettyCash = sequelize.define('PettyCashRelease',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        paymentRequestId:{
            type:DataTypes.INTEGER,
            references:{
                model: PaymentRequest,
                key: 'id'
            }
        },
        receivedById:{
            type:DataTypes.INTEGER,
            references:{
                model: Employee,
                key: 'id'
            }
        },
    },
    {
        tableName: "PettyCashRelease"
    }
)

export default pettyCash