const express = require('express');
require('dotenv/config');
const app = express();
const port = process.env.PORT || 3000;


app.get("/", (_, res) => {
 res.send('Hola , estamos aprendiendo express con la ficha 3407184');});


app.get("/datos", (req, res) => {
    const personales = {
        mensaje : "Datos personales",
        nombre : "Cristian",
        apellido : "Martinez",
        telefono : "3115449740",
    }
    const programa = {        
        mensaje : "Datos de programa",
        nombre : "ADSO",
        tipo : "tecnologo ",
        ficha : "3407184",
    }   
res.json([personales, programa])
})
app.listen(port, () => {
 console.log( `Servidor en funcionamiento en el puerto: ${port}`);
});
