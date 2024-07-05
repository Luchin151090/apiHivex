// Dependencias
import express from "express"
import cors from 'cors'
import morgan from "morgan";
import { Server } from 'socket.io';
import http from 'http';


// Modulos
import routerApicultors from "./routes/apicultor_route.mjs";
import routerColmenas from "./routes/colmena_route.mjs";
import routerAbejas from "./routes/abeja_route.mjs";
import routerPoblacion from "./routes/poblacion_route.mjs";
import routerRecordatorio from "./routes/recordatorio_route.mjs";



// Middlewares
const app = express()
// SOCKET IO TIEMPO REAL
// Crear servidor HTTP y agregar Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080", // Permitir el origen del cliente Vue.js
        methods: ["GET", "POST"]
      },
    reconnection: true,
    reconnectionAttempts: 5,  // Número máximo de intentos
    reconnectionDelay: 1000, 
});
io.on('connection',(socket)=>{
    console.log('Cliente conectado')

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado')
    })
})
app.use(express.json());
app.use(cors())
app.use(morgan('combined'))


// Puerto
const port = 3001



// Uso de rutas
app.use('/api',routerApicultors);
app.use('/api',routerAbejas)
app.use('/api',routerColmenas)
app.use('/api',routerPoblacion)
app.use('/api',routerRecordatorio)

// Ruta por default
app.use('/api',(req,res)=>{
    res.status(404).json({error:'Route Not Found'})
})



server.listen(port,()=>{
    console.log(`Server http://127.0.0.1:${port}`)
})

export { app, io, server };