const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

// connect to mongodb
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO RABBIIT API");
});

//API routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
