//schema é o modelo do banco de dados
const nodeRestful = require('node-restful');

const schema = nodeRestful.mongoose.Schema({
    codigo: {type: Number, required: true},
    descricao: {type: String, required:true},
    cargaHoraria: {type: Number, required: true},
    preco: {type: Number, min: 0},
    categoria: {
        type: String, uppercase:true,
        enum:['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']
    }
});

//Cria a tabela no banco de dados
module.exports = nodeRestful.model('curso', schema);