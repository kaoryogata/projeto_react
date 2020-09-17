const express = require('express');
const server = require('./server');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    const cursosServices = require ('../services/cursos');
    cursosServices.register(router, '/cursos');

    const contatosServices = require('../services/contatos');
    contatosServices.register(router, '/contatos');
}