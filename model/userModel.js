import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    isActive: {
        type: DataTypes.BOOLEAN
    },
    updatedById: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'User',
    indexes: [
        { unique: true, fields: ['username'] },
        { unique: true, fields: ['email'] }
    ]
});

export default User;
