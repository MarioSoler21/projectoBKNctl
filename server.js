const express = require('express');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//rut
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/calendar', require('./routes/calendarRoutes'));

// Puerto
const PORT = process.env.PORT || 3301;
app.listen(
    PORT, 
    () => console.log(`Servidor corriendo en el puerto ${PORT}`)
);
