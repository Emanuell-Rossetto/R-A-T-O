const db = require("./db");

require("dotenv").config();

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

async function testar() {
  try {
    const result = await db.query("SELECT NOW()");
    console.log(result.rows);
  } catch (err) {
    console.error("Erro na query:", err);
  }
}

testar();