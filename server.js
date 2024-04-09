const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Home Page")
      .replace(/__IMAGE__/g, "https://fastly.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo")
      .replace(/__DESCRIPTION__/g, "Home page description.");

    res.send(data)
  });
});

app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "About Page")
      .replace(/__DESCRIPTION__/g, "About page description.");

    res.send(data)
  });
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
