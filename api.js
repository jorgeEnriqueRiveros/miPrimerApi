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
const http = require("http");

const PORT = 3000;

const server = http.createServer((reg, res) => {
    if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Welcome page kikeriveros\n');
    } else {
    res.writeHead(404, { 'Content-TYpe': 'text/plain'});
    res.end('404 Not Found\n');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });