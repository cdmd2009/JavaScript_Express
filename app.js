    const express = require('express');
    const app = express();
    const port = 3000;

    const aprendices = [
        { nombre: "Juan", edad: 20, correo: "juan@gmail.com", imgPerfil: "url_de_imagen_1" },
        { nombre: "Maria", edad: 22, correo: "maria@gmail.com", imgPerfil: "url_de_imagen_2" },
        { nombre: "Pedro", edad: 19, correo: "pedro@gmail.com", imgPerfil: "url_de_imagen_3" }
    ];
    app.listen(port, function() {
    console.log( `Servidor: http://localhost:${port}`);
    });
    app.use(express.json());

    app.get("/", function(req, res) {
    res.send('Hola , estamos aprendiendo express con la ficha 3407184');});


    app.get("/aprendices", (req, res) => {
        res.json(aprendices);
    });
    app.get("/aprendices/busqueda/:nombre", (req, res) => {
        const nombrebusqueda = req.params.nombre;

        const aprendizEncontrado = aprendices.find(aprendiz => aprendiz.nombre.toLowerCase() === nombrebusqueda.toLowerCase());
        if (aprendizEncontrado) {
            res.json(aprendizEncontrado);
        } else {
            res.status(404).json({ mensaje: "Aprendiz no encontrado" });
        }    

    })

    app.post("/aprendices", (req, res) => {
        // Leer los datos del body
        const { nombre, edad, correo, imgPerfil } = req.body;
        
        // Validar que llegaron todos los datos
        if (!nombre || !edad || !correo) {
            return res.status(400).json({
                mensaje: "Faltan datos: nombre, edad y correo son obligatorios"
            });
        }
        else if (nombre.length < 3) {
            return res.status(400).json({
                mensaje: "El nombre debe tener al menos 3 caracteres"
            });
        }
        else if (!correo.includes("@")) {  //el includes es para buscar un caracter dentro de un string, en este caso el @ para validar que sea un correo valido si lo encuentra devuelve true y si no false peeero si tiene ! es al contrario osea si hay un @ muestra un false y si no hay un @ muestra un true y como es un if entonces si es true entra al if y muestra el mensaje de error
            return res.status(400).json({
                mensaje: "El correo no tiene un formato válido"
            });
        }

        // Crear el nuevo aprendiz
        const nuevoAprendiz = {

            nombre: nombre,
            edad: parseInt(edad), //el parseInt es para convertir la edad a número pues solo lee numeros
            correo: correo,
            imgPerfil: imgPerfil || "url_de_imagen_default"  // Si no viene, usar default
        };
        
        // Agregar al arreglo global
        aprendices.push(nuevoAprendiz); //con este se agrega el nuevo aprendiz al arreglo global de aprendices
        
        // Responder con éxito (201 = Created)
        res.status(201).json({  //se agrega el status 201 para indicar que se creo un nuevo recurso y luego un .json para enviar un objeto con la respuesta
            mensaje: "Aprendiz creado exitosamente mediante POST",
            aprendiz: nuevoAprendiz,
            totalAprendices: aprendices.length //length para contar elementos de algo 
        });
    });