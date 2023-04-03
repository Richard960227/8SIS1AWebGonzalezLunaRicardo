const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importing routes
const storeRoutes = require('./routes/store');

//settings
app.set('port',  process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '759213',
    port: 3306,
    database: 'store'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', storeRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});



/*

//para el servidor
const puerto = process.env.PUERTO || 3000;
app.listen(puerto, function(){
    console.log('Servidor funcionando en el puerto : ' + puerto);
})



const cors = require('cors');




app.use(cors());
app.use(express.json());


conexion.connect(function(err) {
    if (err) {        
        console.log('Error al conectar con la BD');
        throw err;
    } else {
        console.log('Conexion Exitosa')
    }
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/Fetch/index.html'));
});

//consulta general
app.get('/17API/api/articulos', (res) => {
    conexion.query('Select * from articulos', (error, filas)=> {
        if(error){
            console.log("Error al consultar por id");
            throw error;
        }else{
            res.send(filas);
        }
    });
});


//quiero ver todos mis articulos de venta por id
app.get('/17API/api/articulos/:id', (req, res) => {
    //aqui es donde yo hago la consulta a la bd
    conexion.query('Select * from articulos where id = ?', [req.params.id], (error, fila) =>{
        if(error){
            console.log("Error al consultar por id");
            throw error;
        }else{
            res.send(fila);
        }
    });
});

//vamos a crear un nuevo articulo de dulce de venta
app.post('/articulos', async (req, res) => {
    //vamos a insertar varios datos en la tabla

    const{ nombre, precio, stock} = req.body;

    const data = {
        nombre : nombre,
        precio : precio,
        stock : stock
    };
    //va la sentencia
    const [result] = await conexion.promise().query('INSERT INTO articulos SET ?', data, function(error, result){
        if(error){
            console.log('Error al insertar los datos en articulos');
            throw error;
        }else{
            //primero necesitamos un objeto que le asignemos los parametros para poder insertar y enviarlo como respuesta
            Object.assign(data, {id : result.insertId});
            //esto es necesario para que cada vez que se inserta un nuevo articulo como el id es auto_increment se inserte ese id
            //ya que lo agregamos enviamos los valores
            res.json(data);
            console.log("Agregado");
        }
    });
});

//para editar
app.put('/17API/api/articulos:id', (req, res) => {
    //primero necesitamos las variables que vamos a editar
    let id = req.params.id;
    let descripcion = req.params.descripcion;
    let precio = req.params.precio;
    let stock = req.params.stock;

    let sql = "Update articulos set descripcion = ?, precio = ?, stock = ?, where id = ?";

    conexion.query(sql, [descripcion, precio, stock, id], function(error, result){
        if(error){
            console.log('Error al actualizar la tabla de articulos');
            throw error;
        }else{
            //simplemente envio los datos
            res.send(result);
        }
    });
});

//eliminar
app.delete('/17API/api/articulos:id', (req, res) => {
    conexion.query('Delete from articulos where id = ?', [req.params.id], function(error, result){
        if(error){
            console.log('Error al borrar el dato');
            throw error;
        }else{
            //envio la respuesta
            res.send(result);
        }
    });
});

*/