import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";


const Agents = sequelize.define('Agents',
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
        tableName:'Agents'
    }
)

export default Agents