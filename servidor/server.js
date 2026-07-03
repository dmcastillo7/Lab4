let app = require('express')();
const http = require('http').Server(app);
const express = require('express');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
    next();
});

//ruteo de endpoints
app.use(require('./routes/auth'));
app.use(require('./routes/usuario'));

// Servir archivos estáticos de Angular
app.use(express.static(path.join(__dirname, '../usuarios/dist/usuarios/browser')));

// Redirigir cualquier ruta no encontrada a Angular
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../usuarios/dist/usuarios/browser/index.html'));
});

http.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});