const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

require('colors');// requiere el paquete de colores y sus metodos

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));

