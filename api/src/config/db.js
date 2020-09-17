//Requisita o módulo do mongoose
const mongoose = require ('mongoose')

//Iguala a promise do node com a promise do mongoose (para evitar warnings no concole)
mongoose.Promise = global.Promise;
//Exporta o resultado da função connect no banco na database escola-cursos
module.exports = mongoose.connect('mongodb://localhost:27017/escola-cursos', { useNewUrlParser: true,  useUnifiedTopology: true});

