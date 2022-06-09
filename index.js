const fs = require('fs');

fs.writeFileSync('./textoPrueba.txt', 'Prueba modulos nodejs, creando archivo', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado satisfactoriamente');
})