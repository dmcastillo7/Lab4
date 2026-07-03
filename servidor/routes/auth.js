const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var getConnection = require('../conexion');
const { SECRET_KEY } = require('../middleware/auth');

router.post('/login', (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
    }

    getConnection(function (err, conn) {
        if (err) {
            return res.status(500).json({ message: 'No se puede conectar a la BD' });
        }

        conn.query('SELECT idusuario, nombreusuario, cedulausuario, correousuario, password FROM usuario WHERE correousuario = ?', [correo], function (err, rows) {
            if (err) {
                conn.release();
                return res.status(500).json({ message: 'Error al consultar la BD' });
            }

            if (rows.length === 0) {
                conn.release();
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const user = rows[0];

            bcrypt.compare(password, user.password, function (err, match) {
                if (err || !match) {
                    conn.release();
                    return res.status(401).json({ message: 'Credenciales inválidas' });
                }

                const token = jwt.sign(
                    {
                        id: user.idusuario,
                        nombre: user.nombreusuario,
                        correo: user.correousuario
                    },
                    SECRET_KEY,
                    { expiresIn: '2h' }
                );

                conn.release();
                res.status(200).json({
                    message: 'Autenticación exitosa',
                    token,
                    usuario: {
                        id: user.idusuario,
                        nombre: user.nombreusuario,
                        correo: user.correousuario
                    }
                });
            });
        });
    });
});

module.exports = router;
