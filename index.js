const fs = require('fs');

fs.readFile('./textoPrueba.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})