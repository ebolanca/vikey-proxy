import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const apiToken = 'F9NUBjYFx4UDY1tGCzhoIJyfF06KRNVuctW47yn16tghSD0W';

  try {
    const response = await fetch("https://sdk.vikey.it/api/reservations", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
      },
    });

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "No se pudo conectar a la API de Vikey",
      detalle: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
