const express = require("express");
const path = require("path");
const app = express();

app.all("/download", (req, res) => {
  res.download(path.join(__dirname, "pages", "index.html"));
});

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("PXWar online!");
});
