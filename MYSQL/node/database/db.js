import { Sequelize } from 'sequelize';

const db = new Sequelize('database_app', 'root', '',{
    host:'localhost',
    password: '759213',
    dialect: 'mysql'
});

export default db;