//Define a porta padrão
const port = 3200;

//Requisita todos os módulos obrigatórios
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors');

//Instancia o servidor e pluga os middlewares de tratamento
const server = express();
//Middleware que vai tratar enconded (ex: %20 que são espaços)
server.use(bodyParser.urlencoded({extended:true}));
//Só aceita json
server.use(bodyParser.json());
//Segue as diretrizes passadas no arquivo cors
server.use(cors);

//Sobe o servidor na porta e exporta o servidor no módulo
server.listen(port, () => console.log('Servidor no ar na porta ${port}'));
module.exports = server;
