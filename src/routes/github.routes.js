const express = require("express");
const { saveProfile } = require("../models/profile.model");
const pool = require("../config/db");
const router = express.Router();

const { getUser, getRepos } = require("../services/github.service");

router.get("/analyze/:username", async (req, res) => {
  const user = await getUser(req.params.username);
  const repos = await getRepos(req.params.username);

  res.json({
    user,
    repos
  });
});

router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const [rows] = await pool.execute(
      "SELECT * FROM profiles WHERE username = ?",
      [username]
    );

    res.json(rows[0] || { message: "User not found" });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.post("/analyze/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const user = await getUser(username);

   const data = {
  githubId: user.id || null,
  username: user.login || null,
  name: user.name || null,
  publicRepos: user.public_repos || 0,
  followers: user.followers || 0,
  following: user.following || 0
};

    await saveProfile(data);

    res.json({
      message: "Profile analyzed & saved successfully",
      data
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});
module.exports = router;