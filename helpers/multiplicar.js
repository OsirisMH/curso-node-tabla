const fs = require('fs');

require('colors');

const crearArchivo = ({ base = 5, mostrar = false, limite = 10 }) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base }`.cyan + ` x `.yellow + `${ i }`.green + ` = ` + `${ base * i }\n`.red;
        }

        if ( mostrar ) {
            console.log('=====================');
            console.log('     TABLA DEL ' + `${ base }`.green  );
            console.log('=====================');
            console.log(salida);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida )
        resolve( `tabla-${base}.txt` );
    });
};


// const crearArchivo = async( base = 5 ) => {
//         try {
//             let salida = '';

//             console.log('=====================');
//             console.log('     TABLA DEL', base);
//             console.log('=====================');
    
//             for (let i = 1; i <= 10; i++) {
//                 salida += `${ base } x ${ i } = ${ base * i }\n`;
//             }

//             fs.writeFileSync( `tabla-${base}.txt`, salida )
//             console.log(salida);
//             resolve( `tabla-${base}.txt` )
//         }
//         catch(err) {
//             reject(err);
//         }
// };

module.exports = {
    crearArchivo
}