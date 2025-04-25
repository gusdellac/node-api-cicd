import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Cargar .env

const app = express();
const environment = process.env.NODE_ENV || 'development';
const port = process.env.PORT_HOST || 3000;

console.log(`initializing ${environment} mode`);

app.use(express.json());

// Ruta de prueba GET
app.get('/', (req, res) => {
  res.send('¡Hola! La API está funcionando. test');
});

// Levantar el servidor escuchando en todas las interfaces para que el host
//pueda acceder al contenedor
app.listen(port, '0.0.0.0', () => {
  console.log(`API listening en http://localhost:${port}`);
});