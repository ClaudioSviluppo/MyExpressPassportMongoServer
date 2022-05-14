const { MongoClient} = require('mongodb');
const {EventEmitter} = require('events');

//Stringa connessione db
const dbURI='mongodb+srv://Babaus:rPLEJlBFYloncth1@babscluster.87a48.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Creo istanza mongo client

const mongoClient = new MongoClient(dbURI,{useUnifiedTopology:true});

//Mi connetto al db la connessione al db è asincrona, infatti il metodo connect ritorna una Promis
//La risoluzione della promise si può fare sia con then che con await, qui usiamo await
//await possiamo utilizzarlo all'interno di funzioni asincrone quindi faccio

async function run () {
    await mongoClient.connect();
    //Se non ho errori di connessione
    console.log('Connessione a mongodb Atlas effettuata');
}

//ora invoco run e gestisco gli errori con catch
run().catch(err => console.log('Errore connessione: ',err));


