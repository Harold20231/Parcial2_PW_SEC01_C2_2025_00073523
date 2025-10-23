const express = require('express');
const app = express();
const PORT = 3130; 

const cuentasRouter = require('./routes/cuentasRoutes'); 
const cuentasController = require('./controllers/cuentasController'); 

app.use(express.json());

app.use('/cuentas', cuentasRouter); 

app.get('/cuenta/:id', cuentasController.getCuentaPorId); 

app.get('/cuentasBalance', cuentasController.getCuentasBalance); // <-- ¡AGREGA ESTA LÍNEA!

app.get('/', (req, res) => {
    res.send('Servidor Backend funcionando. Accede a /cuentas para ver los datos.');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});