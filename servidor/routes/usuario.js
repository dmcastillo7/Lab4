const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
var getConnection = require('../conexion');
const { verifyToken } = require('../middleware/auth');

//consultar usuario por cedula
router.get('/usuario/:cedula', (req, res) => {
    getConnection(function (err, conn) {
        const { cedula } = req.params;

        if (err) {
            return res.status(400).json({ message: "No se puede conectar a la BD" });
        }

        conn.query('SELECT * FROM usuario WHERE cedulausuario = ?', [cedula], function (err, rows) {

            if (err) {
                conn.release();
                return res.status(400).json({ message: "La consulta no se ejecuto correctamente, revise la conexion a la BD" });
            }

            res.status(200).json(rows);
            conn.release();

        });
    });
});

router.post('/insertarUsuario/', (req, res, next) => {
    const data = {
        nombreusuario: req.body.nombreusuario,
        cedulausuario: req.body.cedulausuario,
        direccionusuario: req.body.direccionusuario,
        telefonousuario: req.body.telefonousuario,
        correousuario: req.body.correousuario,
        passwordusuario: req.body.passwordusuario,
    }

    if (!data.passwordusuario) {
        return res.status(400).json({ message: 'La contraseña es requerida' });
    }

    const hash = bcrypt.hashSync(data.passwordusuario, 10);

    const query = 'INSERT INTO usuario (nombreusuario, cedulausuario, direccionusuario, telefonousuario, correousuario, password) VALUES (?, ?, ?, ?, ?, ?)';
    const params = [data.nombreusuario, data.cedulausuario, data.direccionusuario, data.telefonousuario, data.correousuario, hash];

    getConnection(function (err, client) {
        if (err) {
            return res.status(400).json({ message: 'No se puede conectar a la BD' });
        }

        client.query(query, params, (err, result) => {
            if (err) {
                return res.status(400).json({ message: 'Error al insertar el usuario en la BD' });
            } else {
                res.status(201).json({ message: 'Usuario insertado correctamente' });
            }
        });
    });
});

router.get('/buscarUsuarios', verifyToken, (req, res) => {
    getConnection(function (err, conn) {
        if (err) {
            return res.status(400).json({ message: "No se puede conectar a la BD" });
        }

        conn.query('SELECT * FROM usuario', function (err, rows) {
            if (err) {
                conn.release();
                return res.status(400).json({ message: "La consulta no se ejecuto correctamente, revise la conexion a la BD" });
            }

            res.status(200).json(rows);
            conn.release();
        });
    });
});

//Consultar usuario por id
router.get('/buscarUsuarioId/:id', (req, res) => {
    getConnection(function (err, conn) {
        const { id } = req.params;

        if (err) {
            return res.status(400).json({ message: "No se puede conectar a la BD" });
        }

        conn.query('SELECT * FROM usuario WHERE idusuario = ?', [id], function (err, rows) {

            if (err) {
                conn.release();
                return res.status(400).json({ message: "La consulta no se ejecuto correctamente, revise la conexion a la BD" });
            }

            res.status(200).json(rows);
            conn.release();

        });
    });
});

module.exports = router;