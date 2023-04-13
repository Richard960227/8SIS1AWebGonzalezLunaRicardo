var mysql = require('mysql');

var conexion = mysql.createConnection({
    //debo establecer los parametros de dicha conexion los cuales son el host, database, user, pass
    host: 'localhost', //api
    database: 'Alumnos8Sis1A',
    user: 'root',
    password: '759213'
});

//ejecutar la conexion

conexion.connect(function (err) {
    //si es que no conecta
    if (err) {
        console.log('Error al conectar la BD');
        throw err;
    } else {
        console.log('Conexion Exitosa')
    }
});

//una consulta para saber que datos existen

conexion.query('SELECT * FROM Alumnos', function (err, res) {
    if (err) {
        console.log('Error al consultar la tabla');
        throw err;
    } else {
        res.forEach(res => {
            console.log(res);
        });
    }
});

//vamos a realizar un registro

conexion.query('INSERT INTO Alumnos (nombre, appat, apmat, correo, password) VALUES ("Diana", "Del Monte", "Gutierrez", "diana@hotmail.com", "123456")', function (err, res) {
    if (err) {
        console.log('Error al insertar en la tabla');
        throw err;
    }

    console.log('Registro Exitoso', res);
});

//vamos a actualizar un registro

conexion.query('UPDATE Alumnos set nombre =  "Diana Cachemira" WHERE id = 2', function (err, res) {
    if (err) {
        console.log('Error al actualizar en la tabla');
        throw err;
    }

    console.log('Registro Actualizado', res);
});

//Vamos a borrar un registro

conexion.query('DELETE FROM Alumnos WHERE id = 3', function (err, res) {
    if (err) {
        console.log('Error al eliminar en la tabla');
        throw err;
    }
    console.log('Registro Borrado', res);
});
