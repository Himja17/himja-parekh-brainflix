const express = require("express");
const app = express();
require("dotenv").config();
// const { PORT, BACKEND_URL } = process.env;
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const path = require("path");
// middleware
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
const videoRoute = require("./routes/videoRoutes");

// route
app.use("/", videoRoute);

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
