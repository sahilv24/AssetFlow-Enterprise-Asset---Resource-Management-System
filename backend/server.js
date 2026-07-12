const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const assetRoutes = require("./routes/assetRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/assets", assetRoutes);

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/assetflow")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});