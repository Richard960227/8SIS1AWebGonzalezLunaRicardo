const express = require('express');
const app = express();

//definimos jwt
const jwt = require('jsonwebtoken');

//definimos las llaves
const keys = require('./settings/key')

//hacemos una llamada para enviar la referencia de las llaves

app.set('key', keys.key);

//especificamos el tipo de codificacion para la llave
app.use(express.urlencoded({ extended: false}))

//vamos a decir que todo va a ser en formato json
app.use(express.json());

//vamos a generar una ruta
app.get('/', (req, res) => {
    res.send('Hola Mundo con JWT')
});

//vamos a generar una ruta
app.listen(3000, () => console.log('Servidor inicializado en el puerto 3000'));

//ruta del login
app.post('/login', (req, res) => {
    //ahorita no vamos a hacer uso de la bd solo vamos a verificar mediante postman que se pueda enviar
    //preguntar si los datos del login son correctos
    if(req.body.usuario == "admin" && req.body.pass == 12345){
        const playload = {
            check: true,
        }
    //este es nuestro playload mediante el cual definimos cuales son los parametros del usuario para autenticar
        const token = jwt.sign(playload, app.get('key'), {
            expiresIn: '7d'
        });
        //necesito verificar que si entro 
        res.json({
            message: "Autenticacion Exitosa",
            token : token,
        })
    }else{
        //en caso de que sean incorrectos
        res.json({
            message: 'User and Pass no correct peto'
        })
    }
})

//ahora necesitamos crear un middlewere para protegernos de los diferentes tipos de ataques

const verificacion = express.Router();

verificacion.use((req, res, next)=>{
    //tenemos que hacer una verificacion de acceso y autorizacion
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    //comentamos esta seccion
    //console.log(token);
    //y ahora debemos de saber si viene de la ruta y los elementos de autenticacion
    if(!token){
        res.status(401).send({
            error : 'Es necesario un token para su atenticacion' 
        });
        return         
    }
    if(token.startsWith('Bearer ')){
        //en este caso vamos a quitarlos de la cadena
        token = token.slice(7, token.length);
        console.log(token);
    }
    //vamos a verificar si el token es valido
    if(token){
        jwt.verify(token, app.get('key'), (error, decoded)=>{
            if(error){
                return res.json({
                    message : 'El token no es valido'
                });
            }else{
                req.decoded = decoded;
                next();
            }
        })
    }
});
/*
en postman debemos de meter en el type : bearer token y debemos de copiar el token que nos devolvio en la peticion
para que haga la prueba de la ruta y se vea en la consola la informacion
*/
app.get('/info', verificacion, (req, res)=>{
    
    //cuando lo gamos erificaremos que dice Bearer y para eso debemos de quitarla 
    
    res.json('Informacion entregada');
    
});