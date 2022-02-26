import  {Sequelize} from 'sequelize';


const dbName = process.env.DB_NAME || 'test';
const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASS || 'root';
const dbHost = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'postgres',
    host: dbHost,
});

export default sequelize;