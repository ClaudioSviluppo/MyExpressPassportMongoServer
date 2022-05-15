# MyExpressPassportMongoServer

Server express per sviluppo con incluso passport

## Step per riprodurre progetto

npm init  
npm i express express-session mongodb ejs passport passport-local  

### Organizzazione app

creo file index.js  

creo cartella app e sottocartelle  

mkdir app  
mkdir app/config  
mkdir app/routes  
mkdir app/middleware  
mkdir app/views  

### Mongodb

Da browser (userò il cloud)
MongoDB Atlas --> Start Free  
Mi registro o faccio accesso con google )Per quest caso uso google col secondo account  
creo app selezionando versione free  
Creo Organization  => BabsOrganization  
Creo Progetto => BabsProject  
Creo Database (lascio default), ma uin fondo alla pagina Cambio Nome Cluster (BabsCluster) e poi faccio Crea Cluster  
Security QuickStart con Username Babaus password cognome Babs cammellato e numerato  
avrà 512 Mb spazio  

Add collection metto BabsDatabase testcollection  
Faccio Inser Document
creo due proprietà titolo e testo e assegno loro un valore quindi insert 
Quindi faccio AddressIp e siccome sono in sviluppo lascio spuntato allow access from anywhere e quindi Confirm  
Torno su Cluster (Database in version IT) e quindi connect e copio la stringa connect Your Applications  

### La stringa di connessione la posso recuperare da MongoDb Database Connect  

### Parametri di accesso configurati in locale

### Configurazioni sicurezza

creo in config il modulo db-connection.js  
touch app/config/db-connection.js

#### Guardare i commenti all'interno

mi sposto all'interno della cartella app/config e da terminale lancio
nodemon db-connection dovrebeb darmi "Connessione a mongodb Atlas effettuata"
