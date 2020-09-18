//Cors é a política de privacidade
module.exports = (_, resposta, proximo) => { 
    //Aceita qualquer origem
    resposta.header("Access-Control-Allow-Origin", "*"); 
    //Quais métodos são aceitos
    resposta.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 
    //Quais são os headers aceitos
    resposta.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    proximo();
};

    
    
    
