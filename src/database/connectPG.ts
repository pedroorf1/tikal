import { Pool } from "pg";

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_USERPASSWORD = process.env.DB_USERPASSWORD;
const DB_PORT = parseInt(process.env.DB_PORT);

async function connect() {
  if (global.connection) return global.connection.connect();

  const pool = new Pool({
    user: DB_USERNAME,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_USERPASSWORD,
    port: DB_PORT,
  });
  console.info("PostgreSQL conectado!");
  //guardando para usar sempre o mesmo
  global.connection = pool;
  return pool.connect();
}

async function SQL(params: string) {
  if (!params) {
    return { message: "A query precisa ser enviada" };
  }
  try {
    const client = await connect();
    const res = await client.query(params);
    client.release();
    client.end();
    console.table(res.rows);
    const now = new Date();
    const date =
      now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    console.info(`${date}`);
    return res.rows;
  } catch (err) {
    console.info(`Erro ${err.message}`);
    return { message: "Erro ao tentar buscar os dados", error: err.message };
  }
}

export default SQL;
