const path = require("path")
const filename = 'file1.txt';
const fullpath = path.join(___dirname, filename);
console.log ('LA NUEVA RUTA ES:', fullpath)
console.log (path.dirname(fullpath))