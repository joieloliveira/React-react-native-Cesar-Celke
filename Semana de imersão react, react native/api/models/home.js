const mongoose = require('mongoose');//incluido Mongoose para comunicar com o banco de dados
const Schema = mongoose.Schema;

const home = new Schema({
    //Valores que seram salvos no BD
    topTitulo: {
        type: String
    },  
    topSubtitulo: {
        type: String
    },  
    topTextoBtn: {
        type: String
    },  
    topLinkBtn: {
        type: String
    },  
    
    serTitulo: {
        type: String
    },
    serSubtitulo: {
        type: String
    },

    serUmIcone: {
        type: String
    },
    serUmTitulo: {
        type: String
    },
    serUmDesc: {
        type: String
    },

    serDoisIcone: {
        type: String
    },
    serDoisTitulo: {
        type: String
    },
    serDoisDesc: {
        type: String
    },

    serTresIcone: {
        type: String
    },
    serTresTitulo: {
        type: String
    },
    serTresDesc: {
        type: String
    },
},{
    timestamps: true,
});

mongoose.model('Home', home);