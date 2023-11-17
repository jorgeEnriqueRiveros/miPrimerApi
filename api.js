/*
const path = require("path")
const filename = 'file1.txt';
const fullpath = path.join(___dirname, filename);
console.log ('LA NUEVA RUTA ES:', fullpath)
console.log (path.dirname(fullpath))
*/
/*
const fs = require('fs')
fs.writeFileSync('texto1.txt', 'archivo creado desde NODE')
*/
const fs = require('fs')
fs.writeFile('texto1.txt', 'realizando pruebas en NODE', function (){
    console.log("Archivo creado")
})
console.log("Ultima linea")