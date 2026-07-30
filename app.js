import express, { request } from 'express';
import 'dotenv/config';
import cors from "cors"
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

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

app.get("/busqueda/", (req, res) => {
    const busqueda = req.query.q || "no hay busqueda" ;  //este parametro es para poner algun dato pero opcional por eso el || que es lo que muestra cuando no hay nada
    res.send(`El resultado de la busqueda es ${busqueda}`)
})

app.get("/productos/:categoria/:id", (req, res) => {
    const categoria = req.params.categoria
    const id = req.params.id
    const respuesta = {
        servidor : port,
        id : id,
        categoria : categoria,
        mensaje : `Los productos con el id ${id} son de la categoria ${categoria} `
    }
    res.json(respuesta)  //res.json() muestra los datos indicados como un json en vez de como un texto plano
})

app.get("/usuarios/:id/posts", (req, res) => {
    const id = req.params.id;
    const posts = [  //se usa [] para hacerlos objetos para poder ordenarlos con sort
        { id: 1, titulo: "Introducción a Express" },
        { id: 2, titulo: "Middlewares en Node.js" },
        { id: 3, titulo: "Rutas dinámicas" },
        { id: 4, titulo: "Manejo de errores" },
        { id: 5, titulo: "Despliegue en producción" }
    ];
    const orden = req.query.orden || "asc";

    const postsOrdenados = [...posts].sort((a, b) => {  //los tres puntos es para que copie los elementos de post y no tenga que editarlos util para no modificar datos 
        if (orden === "desc") {   
            return b.id - a.id;  //para ordenar los elementos, la logica es que Al restar a.id - b.id, si a es 1 y b es 2, da -1 (negativo), así que el 1 va primero.
        } else {
            return a.id - b.id;
        }
    });

    res.json({
        usuarioId: id,
        ordenAplicado: orden,
        total: postsOrdenados.length,  //funcion length para contar el numero de elementos
        publicaciones: postsOrdenados
    });
});


 app.listen(port, () => {
 console.log( `Servidor en funcionamiento en el puerto: http://localhost:${port}`);
});

