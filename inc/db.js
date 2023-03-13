const mysql = require('mysql2')

const connection = mysql.createConnection({ 
    host: 'localhost',
    user:  'root',
    database: 'saboroso',
    password: 'Vra8@765'
})

module.exports = connection