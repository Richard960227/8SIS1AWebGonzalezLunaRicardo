const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM articulo', (err, articulos) => {
            if(err) {
                res.json(err);
            }
            res.render('articulos', {
                data: articulos
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err,conn) => {
        conn.query('INSERT INTO articulo set ?', [data], (err, articulo) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } =req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM articulo WHERE id = ?', [id], (err, articulo) => {
            res.render('articulo_edit', {
                data: articulo[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } =req.params;
    const newArticulo = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE articulo set ? WHERE id = ?', [newArticulo, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM articulo WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;