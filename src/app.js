const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "User Management System API Is Running",
  });
});

app.use("/api/users", userRoutes);

module.exports = app;