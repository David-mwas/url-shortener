const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const ShortUrl = require("./models/shorturl");

mongoose.connect("mongodb://localhost/urlshortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(express.urlencoded({ extend: false }));

app.get("/", (req, res) => {
  res.redirect("http://localhost:3000/");
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });

  // res.send(req.body.fullUrl);
  console.log(req.body.fullUrl);
  res.redirect("/");
});

app.listen(process.env.NODE_ENV || 5000);
