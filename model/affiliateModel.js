import {DataTypes} from 'sequelize'
import { sequelize } from '../config/conn.js'

const Affiliate = sequelize.define('Affiliate',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING
        }
    },
    {
        tableName:'Affiliates'
    }
)



export default Affiliate