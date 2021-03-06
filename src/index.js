const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 9000; 

// Middleware
app.use(express.json())
app.use('/api', userRoutes)

//Rutas
app.get('/', (req, res) => {
    res.send("Welcome to my little API :D")
})

// Conexion a MongoDB
mongoose.connect(
    process.env.MONGODB_URI
).then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error(error))

// Listen del server
app.listen(port, () => console.log('Servidor en puerto', port));