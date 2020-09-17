require('./config/db');
const server = require('./config/server');
//requisita a função e já a executa
require('./config/routes')(server);