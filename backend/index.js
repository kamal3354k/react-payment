const dotenv = require("dotenv");
const express = require("express");
const handleCors = require("./middleware/handleCors.js");
const router = require("./router/router.js");
dotenv.config();

const app = express();

app.use(express.json());

// Enable CORS middleware
app.use(handleCors);

app.use("/", router);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
