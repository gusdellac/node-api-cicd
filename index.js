import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Cargar .env

const app = express();
const environment = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

console.log(`initializing ${environment} mode`);

app.use(express.json());

// Ruta de prueba GET
app.get('/', (req, res) => {
  res.send(`[ENVIRONMENT ${environment}] - [API OK]`);
});

// Levantar el servidor escuchando en todas las interfaces para que el host
//pueda acceder al contenedor
app.listen(port, '0.0.0.0', () => {
  console.log(`ENVIRONMENT ${environment} - API listening en http://localhost:${port}`);
});