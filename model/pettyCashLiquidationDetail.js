import {DataTypes} from 'sequelize'
import { sequelize } from '../config/conn.js'
import PettyCashLiquidation from './pettyCashLiquidationModel.js'
import PaymentRequestDetail from './paymentRequestDetailModel.js'

const pettyCashLiquidationDetail = sequelize.define('pettyCashLiquidationDetail',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        pettyCashLiquidationId:{
            type:DataTypes.INTEGER,
            references:{
                model:PettyCashLiquidation,
                key:'id'
            }
        },
         paymentRequestDetailId:{
            type:DataTypes.INTEGER,
            references:{    
                model:PaymentRequestDetail,
                key:'id',
            }
        },
        liquidatedAmount:{
            type:DataTypes.DECIMAL(12, 2),
        },
        returnRefundAmount:{
            type:DataTypes.DECIMAL(12, 2)
        }
    },
    {tableName:'PettyCashLiquidationDetail'}
)

export default pettyCashLiquidationDetail