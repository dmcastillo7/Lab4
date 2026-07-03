const bcrypt = require('bcryptjs');
var getConnection = require('./conexion');

const saltRounds = 10;
const defaultPassword = '123456';

getConnection(function (err, conn) {
    if (err) {
        console.log('Error de conexion:', err.message);
        process.exit(1);
    }

    conn.query('SELECT idusuario FROM usuario', function (err, rows) {
        if (err) {
            console.log('Error:', err.message);
            conn.release();
            process.exit(1);
        }

        const hash = bcrypt.hashSync(defaultPassword, saltRounds);

        conn.query('UPDATE usuario SET password = ?', [hash], function (err, result) {
            if (err) {
                console.log('Error al actualizar:', err.message);
            } else {
                console.log('Contraseñas actualizadas para', result.affectedRows, 'usuarios');
            }
            conn.release();
            process.exit(0);
        });
    });
});
