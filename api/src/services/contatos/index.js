const schemaRestful = require('./schema');

schemaRestful.methods(['get', 'post', 'delete']);
schemaRestful.updateOptions({new: true, runValidators: true});

module.exports = schemaRestful;