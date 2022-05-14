const express = require ('express');
const session = require ('express-session');
const passport = require ('passport');

//Creo oggetto app
const app = express();
//Definisco una costante port
const port = process.env.PORT || 3000;

//vado a settare nell'app views indicando la cartella che ho predisposto per le views
app.set('views','./app/views');
//Imposto il template engine che userò
app.set('view engine','ejs');
//Ora ho bisogno di connettermi a mongodb e metter in ascolto il mio server dopo l'avvenuta connessione a mongodb
