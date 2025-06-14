export default {
  async fetch(request, env, ctx) {
    const apiToken = "F9NUByTFx4UDYT1GCZhoIJyfF0GKNRvuctW74Ynl6tgHSdOW";

    try {
      const response = await fetch("https://sdk.vikey.it/api/reservations", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiToken}`
        }
      });

      const text = await response.text();

      return new Response(text, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({
        status: "error",
        message: err.message
      }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};
