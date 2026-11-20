export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/log") {
      await env.DB
        .prepare("CREATE TABLE IF NOT EXISTS logger (posX int, posY int, logged bool, timestamp int);")
        .run();
      return Response.json({ ok: true });
    }

    return env.ASSETS.fetch(request);
  },
};