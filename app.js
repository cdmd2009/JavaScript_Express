const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
 res.send('Hola , estamos aprendiendo express con la ficha 3407184');});

app.listen(port, function() {
 console.log( `Servidor: http://localhost:${port}`);
});
app.get("/aprendices/busqueda/:nombre", (req, res) => {
    const nombrebusqueda = req.params.nombre;
    const aprendices = [
        { nombre: "Juan", edad: 20, correo: "juan@gmail.com", imgPerfil: "url_de_imagen_1" },
        { nombre: "María", edad: 22, correo: "maria@gmail.com", imgPerfil: "url_de_imagen_2" },
        { nombre: "Pedro", edad: 19, correo: "pedro@gmail.com", imgPerfil: "url_de_imagen_3" }
    ];
    const aprendizEncontrado = aprendices.find(aprendiz => aprendiz.nombre.toLowerCase() === nombrebusqueda.toLowerCase());
    if (aprendizEncontrado) {
        res.json(aprendizEncontrado);
    } else {
        res.status(404).json({ mensaje: "Aprendiz no encontrado" });
    }    

})
app.get("/aprendices/:nombre/:edad", (req, res) => {
    const nombrepersona = req.params.nombre; // req.params.nombre es una forma de acceder a los parámetros de la ruta en express, en este caso estamos accediendo al parámetro nombre que se encuentra en la ruta /aprendices/:nombre
    const edadpersona = req.params.edad; 
    const aprendices = [  // En python llamadas listas en javascript se llaman arreglos o arrays como es un framework de javascript, se puede usar la palabra reservada const para declarar una variable que no va a cambiar de valor, en este caso aprendices es un arreglo de objetos
        { nombre: "Juan", edad: 20, correo: "juan@gmail.com", imgPerfil: "url_de_imagen_1" },
        { nombre: "María", edad: 22, correo: "maria@gmail.com", imgPerfil: "url_de_imagen_2" },
        { nombre: "Pedro", edad: 19, correo: "pedro@gmail.com", imgPerfil: "url_de_imagen_3" },
        { nombre: nombrepersona, edad: edadpersona, correo: `${nombrepersona}@gmail.com`, imgPerfil: "url_de_imagen_4" }
    ];
    res.json(aprendices);
})
