const schemaRestful = require('./schema');

schemaRestful.methods(['get']);
schemaRestful.updateOptions({new: true, runValidators: true});

module.exports = schemaRestful;