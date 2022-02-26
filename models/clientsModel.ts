import db from '../db';
import Sequelizer from 'sequelize';

export default db.define('client', {
    id: {
        type: Sequelizer.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name : {
        type: Sequelizer.STRING,
        allowNull: false,
    },
    email : {
        type: Sequelizer.STRING,
        allowNull: false,
    },
})