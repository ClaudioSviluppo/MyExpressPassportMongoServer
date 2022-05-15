
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const mongoConstants = require('./config/mongo');

//Stringa connessione db
const dbURI= `mongodb+srv://${mongoConstants.user}:${mongoConstants.password}@${mongoConstants.cluster}.87a48.mongodb.net/${mongoConstants.database}?retryWrites=true&w=majority`;

//Creo istanza mongo client
const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

//Creo una variabile di riferimento al db blog (all'inizio non ancora creato)
let blogDB;
//Creo una variabile di riferimento alla collection articoli ( all'inizio non ancora creata)
let articoliCollection;
//Mi connetto al db la connessione al db è asincrona, infatti il metodo connect ritorna una Promis
//La risoluzione della promise si può fare sia con then che con await, qui usiamo await
//await possiamo utilizzarlo all'interno di funzioni asincrone quindi faccio


//Creo 4 rotte passando indirizzo e callback di gestione
//Sono operazioni asincrone e siccome async posso solo indicarlo all'interno di funzioni asincrone
// rendo asincrona la callback con la parola chiave async
//CREATE  localhost:3000/nuovo-articolo
app.get('/nuovo-articolo', async (req, res) => {
    console.log("Chiamo")
    const articolo = {
        titolo: "Titolo articolo 1",
        testo: "Testo articolo 1",
        autore: "Claudio",
        tag: ["node.js", "Javascript", "mongodb"]
    };

    const articoli = [
        {
            titolo: "Titolo articolo 2",
            testo: "Testo articolo 3",
            autore: "Claudio",
            tag: ["node.js", "Javascript", "mongodb"]
        },
        {
            titolo: "Titolo articolo 3",
            testo: "Testo articolo 3",
            autore: "Claudio",
            tag: ["node.js", "Javascript", "mongodb"]
        }
    ]
    const risultato = await articoliCollection.insertOne(articolo);
    console.log(risultato)
    const risultati = await articoliCollection.insertMany(articoli);
    console.log(risultati);
    //console.log (risultato)
    if (risultato.insertedId !== null && risultati.insertedCount === 2) {
        res.send(`Sono stati inseriti ${risultati.insertedCount + 1} documenti nella collezione Articoli`);
    }
});

//READ localhost:3000/articolo
app.get('/articolo', async (req, res) => {
    const articolo = await articoliCollection.findOne({ titolo: "Titolo articolo 3" })
    const cursor = articoliCollection.find({}); //Non vuole await e vuole oggetto Vuoto

    const articolo2 = await articoliCollection.findOne({ _id: '627fb4f0b300980b99531bb1' });
  
    console.log(articolo);
    console.log("Articolo 2",articolo2);
    console.log(await cursor.count());

    while (await cursor.hasNext()) {
        console.log(await cursor.next());
    }

    // Altro modo funzion<nte per ciclare
    // for await (art of cursor){
    //     console.log(art.titolo);
    // }

    //Per recuperare solo il primo risultato
    const cursor2 = articoliCollection.find({}); //Non vuole await e vuole oggetto Vuoto
    const articolo1 = await cursor2.next();
    console.log("Primo articolo", articolo1);
    res.send();
});

//UPDATE localhost:3000/modifica-articolo
app.get('/modifica-articolo', async (req, res) => {
    //Per la modifica mi serve l'operatore set che si invoca con $set
    //e gli passiamo l'oggetto con i campi che vogliamo modificare

    const update = {
        $set: {
         autore:"Yuki"
        }
    };

    const filter = { _id: '627fb4f0b300980b99531bb1' };
    const filter2 = { autore: 'Claudio1' };


    const ris = await articoliCollection.updateOne(filter2, update);
    console.log("Aggiornati",ris.modifiedCount);

    //Per aggiornarli tutti
    articoliCollection.find({}).forEach(articolo => {
        let voto = Math.random()*5;
        //articoliCollection.updateOne(filter2, update);
    })

    res.send();

});

//DELETE
app.get('cancella-articolo', (req, res) => { });

async function run() { 
   await mongoClient.connect();
    //Se non ho errori di connessione
    console.log('Connessione a mongodb Atlas effettuata');
    // il server express non deve partire prima che la connessione sia stata stabilita
    //lo metto in ascolto passando al costruttore la porta e una callback (che in questo caso stamperà solo un messaggio)

    //chiedo riferimento a db blog
    blogDB = mongoClient.db('blog');  //Ritorna una istanza del db che memorizzo dentro la variabile

    articoliCollection = blogDB.collection('articoli');
    //Ora recupero riferimento a collection articoli
    app.listen(3000, () => console.log('Server in ascolto sulla porta 3000'));
}

//ora invoco run e gestisco gli errori con catch
run().catch(err => console.log('Errore connessione: ', err));


