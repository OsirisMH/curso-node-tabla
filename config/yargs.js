const argv = require('yargs')
    .options(
        {
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            },
            'm': {
                alias: 'mostrar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Muestra la tabla en consola'
            },
            'l': {
                alias: 'limite',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Hasta que numero quieres que multiplique'
            }
        }
    )
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número';
        }
        if ( typeof argv.m  !== 'boolean' ){
            throw 'El valor debe ser true o false';
        }
        if ( isNaN( argv.l ) ){
            throw 'El limite tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;
