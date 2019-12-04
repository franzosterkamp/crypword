const express = require("express");
const { get, unset, set } = require("./utils/cmds");
const app = express();
const port = 9090;

app.use(express.json()); // for parsing application/json

// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.get("/api/secrets/:key", async (request, response) => {
  const { key } = request.params;
  try {
    const result = await get(key);
    response.end(result);
  } catch (error) {
    response.status(400).end("Can not read secret");
  }
});

app.post("/api/secrets/:key", async (request, response) => {
  const { key } = request.params;
  const { value } = request.body;
  await set(key, value);
  response.end(`Das Passwort von ${key} wurde auf ${value} geändert`);
});

app.delete("/api/secrets/:key", async (request, response) => {
  const { key } = request.params;
  await unset(key);
  response.end(`${key} wurde gelöscht`);
});

app.listen(port, () => {
  console.log("Server Running!");
});
