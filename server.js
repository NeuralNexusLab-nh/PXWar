const express = require("express");
const path = require("path");
const app = express();

app.all("/download", (req, res) => {
  res.download(path.join(__dirname, "pages", "pxwar.html"));
});

app.all("/domains", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send(`
  https://pxwar.ndjp.net
  https://pxwar.is-an.ai
  https://pxwar.zone.id
  https://pxwar.zeabur.app
  https://pxwar.ddnsfree.com
  `);
});

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "pxwar.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("PXWar online!");
});
