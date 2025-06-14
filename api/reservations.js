export default async function handler(req, res) {
  const apiToken = process.env.API_TOKEN;

  try {
    const response = await fetch("https://sdk.vikey.it/api/reservations", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiToken}`
      }
    });

    const text = await response.text();
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);

  } catch (err) {
    res.status(500).json({
      error: "No se pudo conectar a la API de Vikey",
      detalle: err.message
    });
  }
}
