const express = require('express');
const app = express();
const port = 3004;

// Datos de usuarios
const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
    { id: 2, nombre: "Ana García", email: "ana@example.com" },
    { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
];

// Ruta para obtener usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});