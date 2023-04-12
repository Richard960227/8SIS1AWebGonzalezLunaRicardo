const express = require('express');
const app = express();

const bcryptjs = require('bcryptjs');

app.use(express.urlencoded({extended: false}));

app.use(express.json());



app.post('/login', async (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    
    if(user == 'admin' && password == 123){
        let passwordHash = await bcryptjs.hash(password, 8);

        res.status(200).json({
            message: 'Autenticacion Exitosa',
            passwordHash: passwordHash
        })
    }else{
        res.status(401).json({
            message: 'Credenciales incorrectas'
        })
    }
})

app.get('/comparar', (req, res) => {
    let hashSaved = '"$2a$08$smrRvidacIPmQdQV//ImgeH.PYHYnEYLMwFm0bpzIZBMEopYJsmAC"';

    let compare = bcryptjs.compareSync('123', hashSaved);

    if(compare){
        res.status(200).json('Ok')
    }else{
        res.status(401).json('No son iguales')
    }
})

app.listen(3000, () => {
    console.log('Servidor inicializado' + app)
})

