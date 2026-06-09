require("dotenv").config();
const express = require("express");
const pool = require("./src/config/db");
const githubRoutes = require("./src/routes/github.routes");

const app = express();

app.use(express.json());

// Register Routes
app.use("/api/profiles", githubRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

// Test Database Connection
async function testDB() {
  try {
    const connection = await pool.getConnection();

    console.log("Database Connected");

    connection.release();
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
  }
}

testDB();

app.listen(3000, () => {
  console.log("Server Started");
});