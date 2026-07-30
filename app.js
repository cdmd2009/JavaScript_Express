import express, { request } from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
 res.send('Hola , estamos aprendiendo express con la ficha 3407184');});

//prueba uso de get simple
 app.get("/Ping", (req, res) => {
    res.send("Pong")})

//prueba uso de get personalizado
app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre
    res.send(`Hola, ${nombre}, bienvenido a mi prueba en express`);  //siempre se usan `` (alt gr + } )
})
 app.listen(port, () => {
 console.log( `Servidor en funcionamiento en el puerto: ${port}`);
});

