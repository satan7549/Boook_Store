const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const bookRoutes = require("./routes/book.route");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

/* import all routes */
app.use("/user", userRoutes);
app.use("/book", bookRoutes);


module.exports = app;
