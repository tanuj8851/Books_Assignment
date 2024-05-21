const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const requestLogger = require("./middleware/requestLogger");
const { connection } = require("./config/db");

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Books Management System",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${PORT} and DB Connected`);
  } catch (error) {
    console.log(error.message);
  }
});
