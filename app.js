// Requires
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

// Inicializar variables
let app = express();


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Importar rutas
let appRoutes = require('./routes/app');
let usuarioRoutes = require('./routes/usuario');
let loginRoutes = require('./routes/login');
let consultorioRoutes = require('./routes/consultorio');
let especialidadRoutes = require('./routes/especialidad');
let provinciaRoutes = require('./routes/provincia');
let localidadRoutes = require('./routes/localidad');
let domicilioRoutes = require('./routes/domicilio');


// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});


// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/consultorio', consultorioRoutes);
app.use('/especialidad', especialidadRoutes);
app.use('/provincia', provinciaRoutes);
app.use('/localidad', localidadRoutes);
app.use('/domicilio', domicilioRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});