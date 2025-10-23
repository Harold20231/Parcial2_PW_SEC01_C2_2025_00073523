const express = require('express');
const router = express.Router();
const cuentasController = require('../controllers/cuentasController');

router.get('/', cuentasController.getTodasLasCuentas);

module.exports = router;