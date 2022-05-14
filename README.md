# MyExpressPassportMongoServer
Server express per sviluppo con incluso passport

### Step per riprodurre progetto
npm init <br>
npm i express express-session mongodb ejs passport passport-local  <br>

### Organizzazione app
creo file index.js  <br>
creo cartella app e sottocartelle <br>
mkdir app <br>
mkdir app/config <br>
mkdir app/routes <br>
mkdir app/middleware <br>
mkdir app/views <br>

### Mongodb
Da browser (userò il cloud)
MongoDB Atlas --> Start Free <br>
Mi registro o faccio accesso con google )Per quest caso uso google col secondo account <br>
creo app selezionando versione free <br>
Creo Organization  => BabsOrganization <br>
Creo Progetto => BabsProject
Creo Database (lascio default), ma uin fondo alla pagina Cambio Nome Cluster (BabsCluster) e poi faccio Crae Cluster
Security QuickStart con Username Babaus e faccio generare a lui la pwd => rPLEJlBFYloncth1  <br>   avrà 512 Mb spazio

Add collection metto BabsDatabase testcollection <br>Faccio Inser Document
creo due proprietà titolo e testo e assegno loro un valore quindi insert <br>
Quindi faccio AddressIp e siccome sono in sviluppo lascio spuntato allow access from anywhere e quindi Confirm<br>
Torno su Cluster (Database in version IT) e quindi connect e copio la stringa connect Your Applications<br>

mongodb+srv://Babaus:<password>@babscluster.87a48.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

### Configurazioni sicurezza
creo in config il modulo db-connection.js <br>
touch app/config/db-connection.js
##### Guardare i commenti all'interno
mi sposto all'interno della cartella app/config e da terminale lancio
nodemon db-connection dovrebeb darmi "Connessione a mongodb Atlas effettuata"
