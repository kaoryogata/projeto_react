const schemaRestful = require('./schema');

schemaRestful.methods(['get', 'post', 'put', 'delete']);
schemaRestful.updateOptions({ new: true, runValidators: true});

//Exporta o módulo para definir a routa no arquivo router
module.exports = schemaRestful;