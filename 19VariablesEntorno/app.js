const express = require('express');

//const config = require('config');

const app = express();

//el archivo .env es como node puede detectar cuales son las variables de entorno para este proyecto acorde al sistema
//aqui se puede definir los puertos de comunicacion, bd, archivos, rutas del sistema, etc.
//Una vez definida podemos hacer la invocacion de dicha variable
//vamos a definir el path de donde se encuentra nuestra variable de entorno

require('dotenv').config({path : './.env'});

const puerto = process.env.PORT;

//const puerto = config.get('port');

app.listen(puerto, () => {
    console.log('Servidor inicializado en el puerto ' + puerto);
})