var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: 'dmcs230680e',
    database: 'biblioteca'
});

var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        if (err) {
            return cb(err);
        }
        cb(null, connection);
    });
};

module.exports = getConnection;