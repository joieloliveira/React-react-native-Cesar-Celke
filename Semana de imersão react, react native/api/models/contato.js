const mongoose = require('mongoose');//incluido Mongoose para comunicar com o banco de dados
const Schema = mongoose.Schema;

const contato = new Schema({
    //Valores que seram salvos no BD
    name: {
        type: String
    },  
    email: {
        type: String
    },  
    subject: {
        type: String
    },  
    content: {
        type: String
    },  
    
},{
    timestamps: true,
});

mongoose.model('Contato', contato);