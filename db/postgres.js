const { Client } = require('pg');
const pool = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'airlines',
    password: '12345678',
    port: 5432,
});

pool.connect()

module.exports = pool;