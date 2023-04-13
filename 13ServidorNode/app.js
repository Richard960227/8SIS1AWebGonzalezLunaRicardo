/*var colors = require('colors');

// con esto podemos realizar una estancia para poder manipular el objoto de acuerdo a poo

let contacto = {"nombre" : "Juanito", "email" : "juanito@gmail.com", "edad" : 22};

console.log(contacto.nombre.green);

console.log(contacto.email.bgBlue);

var prueba = require('./function');

//con esto ya puedo mandar a llamar los metodos programados en la otra "clase"

prueba.suma(7,8);
prueba.resta(10,8);
*/

var http = require('http');
//vamos a crear nuestro propio servidor
var servidor = http.createServer(function (request, response) {
    //el tipo de respuesta que nos debe de obtener por parte del servidor debe de ser en formato html
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write('<h2>Hola Mundo, esto es un servidor en node y les dejare muchas cosas horribles para dequitarme wii quiero dejar una calculadora en node asi bien kawaii</h2>');

    console.log('Se hizo una peticion web');

    response.end();
})

//mandar a llamar el puerto mediante el cual se van a atender las peticiones por parte del cliente

servidor.listen(3000);

//para ejecutar las peticiones debemos hacerlo desde el navegador para ello vamos a visualizar elementos a taves de localhost:3000

console.log('Ejecutando el Servidor Local en el puerto 3000');

//vamos a atender de forma automaticamente las peticiones para ello tenemos que instalar un paquete llamado nodemon npm install nodemon -g
