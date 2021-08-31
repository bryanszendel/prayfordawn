var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var timeSlotsRouter = require("./routes/timeSlotsRouter");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/timeslots", timeSlotsRouter);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`\n === Server listening on port ${port} === \n`);
});
module.exports = app;
