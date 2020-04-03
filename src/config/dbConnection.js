const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: ' sql9.freemysqlhosting.net',
        user: 'sql9330409',
        password: 'UmhMnyFUYS',
        database: '1IavvNPWVY'
    });
}
