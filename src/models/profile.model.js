const pool = require("../config/db");

async function saveProfile(data) {
  const query = `
    INSERT INTO profiles
    ( github_id,
      username,
      name,
      public_repos,
      followers,
      following,
      account_age_days,
      total_stars,
      analysis_score
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  await pool.execute(query, [
    data.githubId,
    data.username,
    data.name,
    data.publicRepos,
    data.followers,
    data.following,
    data.accountAgeDays,
    data.totalStars,
    data.analysisScore
  ]);
}

module.exports = { saveProfile };