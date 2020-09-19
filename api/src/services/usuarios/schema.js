const nodeRestful = require('node-restful');

const schema = new nodeRestful.mongoose.Schema ({
    email: {type: String, required: true},
    senha: {type: String, reequired: true}
});

module.exports = nodeRestful.model('usuarios', schema);