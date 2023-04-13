const express = require('express');
const router = express.Router();

const storeController = require('../controllers/storeController');

router.get('/', storeController.list);
router.post('/add', storeController.save);
router.get('/delete/:id', storeController.delete);

router.get('/update/:id', storeController.edit);
router.post('/update/:id', storeController.update);

module.exports = router;