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
/*
const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split('?')[0].split('/')[1];
    const params = new URLSearchParams(req.url.split('?')[1]);
    
    if (params.has('edad')) {
      const edad = parseInt(params.get('edad'));
      
      res.writeHead(200, { 'Content-Type': 'text/plain' });
       
      if (edad >= 18) {
        fs.appendFile('eres mayor de edad.txt', 'nombre' + 'edad' , function (err) {
          if (err) throw err;
        })
        res.end(`${'Hola si eres mayor de edad ' + nombre} es mayor de edad.\n`);
        } else {
        res.end(`${'Hola no cumples con los requisitos ' + nombre} no es mayor de edad.\n`);
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Gracias por visitar nuestra pagina "edad".\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
/*
const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split('?')[0].split('/')[1];
    const params = new URLSearchParams(req.url.split('?')[1]);
    const jsonData = fs.readFileSync('dat.json', 'utf-8');
    const datos = JSON.parse(jsonData);
    if (params.has('edad')) {
      const edad = parseInt(params.get('edad'));

      fs.appendFile('datos.txt', JSON.stringify({ nombre, edad }), function (err) {
        if (err) throw err;
        console.log('Datos guardados en datos.txt');
      });

      if (edad >= 18) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hola, ${nombre}, eres mayor de edad.\n`);
      } else {
        fs.appendFile('no_mayor_de_edad.txt', JSON.stringify({ nombre, edad }), function (err) {
          if (err) throw err;
          console.log('Datos guardados en no_mayor_de_edad.txt');
        });

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hola, ${nombre}, no eres mayor de edad.\n`);
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Gracias por visitar nuestra pagina "edad".\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/

const http = require('http');
const { markAsUntransferable } = require('worker_threads');
const PORT = 3000;
let users = [
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
  },
  {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    city: "San Francisco"
  },
  {
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
    city: "Los Angeles"
  }
];
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const nombre = req.url.split('?')[0].split('/')[1];
    const params = new URLSearchParams(req.url.split('?')[1]);
    if (params.has('edad')) {
    const edad = parseInt(params.get('edad'));
    const usuarioEncontrado = users.find(users => users.name === nombre);
    if (usuarioEncontrado) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<p>Nombre: ${users.name}</p>
                <p>Edad: ${usuarioEncontrado.age}</p>
                <p>Email: ${usuarioEncontrado.email}</p>
                <p>Ciudad: ${usuarioEncontrado.city}</p>`);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`${users.name} no encontrado.\n`);
    }
    } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Por favor, proporciona el parámetro "edad" en la URL.\n');
    }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Gracias por visitar nuestra pagina.\n');
    }
    });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



