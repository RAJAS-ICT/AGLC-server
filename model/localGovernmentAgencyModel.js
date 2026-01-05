import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";

const LocalGovernmentAgency = sequelize.define('LocalGovernmentAgency',
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
        tableName:'LocalGovernmentAgency'
    }
)


export default LocalGovernmentAgency