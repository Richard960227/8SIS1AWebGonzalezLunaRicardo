const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//todo lo que vamos a manipular va a ser por jason
const {json} = require('express');

const app = express();

app.use(express.json());

//establecemos nuestro middleware

app.use(cors());

//establecemos nuestar conexion

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'articulos'
});

//establezco conexion con BD

conexion.connect(function(err, conn) {
    if(err){
        throw err;
        console.log('Error al conectar con la BD');
    }else{
        console.log('Conexion Exitosa')
    }
});

//tengo que definir las rutas para visualizar la informacion

app.get('/', function(req, res){
    res.send('Ruta INICIO');
});

//consulta gral
app.get('/17Api/Api/Articulos', (req, res) => {
    conexion.query('SELECT * FROM Articulos', (err, filas) => {
        if(err) {
            throw err;
            console.log("Error al Consultar por ID");
        }else{
            res.send(filas);
        }
    });
});

//quiero ver todos mis articulos de venta por id
app.get('/17API/Api/Articulos/:id', (req, res) => {
    //aqui es donde yo hago la consulta a la bd
    conexion.query('SELECT * FROM Articulos WHERE id = ?', [req.params.id], (err, res) => {
        if(err) {
            throw err;
            console.log("Error al Consultar por ID");
        }else{
            res.send(fila);
        }
    });
});

//Vamos a crear un nuevo articulo de dulce de venta

app.post('/17API/Api/Articulos', (req, res) => {
    //vamos a insertar varios datos en la tabla
    let data = {
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock
    };
    //va la sentencia
    let sql = 'INSERT INTO Articulos SET ?';
    conexion.query(sql, data, function(err, res) {
        if(err){
            console.log('Error al inserta los datos en articulos');
        }else{
            //primero necesitamos un objeto que le asignemos los parametros para poder insertar y enviarlo como respuesta
            Object.assign(data, {id: res.insertID});
            //esto es necesario para que cada vez que se inserta un nuevo articulo con el Id es auto_increment se inserta ese id
            //ya que lo enviamos lo agregamos enviamos los valores
            res.send(data);
        }
    })
});

//para editar
app.put('/17API/Api/Articulos:id'), (req, res) => {
    let id = req.params.id;
    let descripcion = req.params.descripcion;
    let precio = req.params.precio;
    let stock = req.params.stock;

    let sql = 'UPDATE Articulos SET Descripcion = ?, precio = ?, stock = ?, WHERE id = ?';

    conexion.query(sql, function (err, res) {
        if(err){
            throw err;
            console.log('Error al actualizar la tabla de articulos');
        }else{
            //simplemente evio los datos
            res.send(res);
        }
    });
};

//Eliminar
app.delete('/17API//Api/Articulos:id', (req, res) => {
    conexion.query('DELETE FROM Articulos WHERE id = ?', [req.params.id], function (err, res) {
        if(err){
            throw err;
            console.log('Error al borrar el dato');
        }else{
            //evio la respuesta
            res.send(res);
        }
    });
});

//para el servidor
const puerto = process.env.PORT || 3000;

app.listen(puerto, function(){
    console.log('Servidor funcionando en el puerto:' + puerto);
});