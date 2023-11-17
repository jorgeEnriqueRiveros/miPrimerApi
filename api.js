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
/*
const fs = require('fs')
fs.writeFile('texto1.txt', 'realizando pruebas en NODE', function (){
    console.log("Archivo creado")
})
console.log("Ultima linea")
*/

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split('?')[0];
    const params = new URLSearchParams(req.url.split('?')[1]);
    const mensaje = "Hola" + nombre + "me podrias solicitar tu edad"
    if (params.has('edad')) {
      const edad = parseInt(params.get('edad'));

      res.writeHead(200, { 'Content-Type': 'text/plain' });

      if (edad >= 18) {
        res.end(`${"Hola" + " " + nombre} es mayor de edad.\n`);
      } else {
        res.end(`${"Hola" + " " + nombre} no es mayor de edad.\n`);
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Error: Debes proporcionar el parámetro "edad".\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


