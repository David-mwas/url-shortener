const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
    res.send("hello form backened")
});

app.post("/shortUrls", (res, req) => {
    
})

app.listen(process.env.NODE_ENV || 5000);
