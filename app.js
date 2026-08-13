const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
 res.send('Hola , estamos aprendiendo express con la ficha 3407184');});

app.listen(port, function() {
 console.log( `Servidor: http://localhost:${port}`);
});
