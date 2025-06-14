import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const apiToken = 'F9NUBJYfX4UDY1t6CZhoIJyfF0GKNRvuctW74Yn16tghSD0W';

  try {
    const response = await fetch('https://sdk.vikey.it/api/reservations', {
      headers: {
        'Authorization': `Bearer ${apiToken}`
      }
    });

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo conectar a la API de Vikey', detalle: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
