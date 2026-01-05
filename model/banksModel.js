import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";

const Banks = sequelize.define('Banks',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING
        }
    },
    {
        tableName:'Banks'
    }
)

export default Banks