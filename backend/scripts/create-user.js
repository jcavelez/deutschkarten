#!/usr/bin/env node
// Create a user manually. Public registration is closed.
//
// Usage:
//   node backend/scripts/create-user.js <username> <password> <de|fr>
//
// Requires DATABASE_URL in the environment (same var the server uses).
// Point it at the relevant Neon branch (dev or production); their connection
// strings already include sslmode=require.

const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const SALT_ROUNDS = 10; // must match server.js

async function main() {
  const [, , username, password, language] = process.argv;

  if (!username || !password || !language) {
    console.error("Uso: node backend/scripts/create-user.js <username> <password> <de|fr>");
    process.exit(1);
  }
  if (!["de", "fr"].includes(language)) {
    console.error(`Idioma inválido: "${language}". Debe ser "de" o "fr".`);
    process.exit(1);
  }
  if (!process.env.DATABASE_URL) {
    console.error("Falta DATABASE_URL en el entorno.");
    process.exit(1);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const result = await pool.query(
      "INSERT INTO users (username, password_hash, language) VALUES ($1, $2, $3) RETURNING id, username, language",
      [username.trim(), hash, language]
    );
    const user = result.rows[0];
    console.log(`✓ Usuario creado: ${user.username} (id ${user.id}, idioma ${user.language})`);
  } catch (err) {
    if (err.code === "23505") {
      console.error(`✗ El usuario "${username.trim()}" ya existe.`);
    } else {
      console.error("✗ Error al crear el usuario:", err.message);
    }
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

main();
