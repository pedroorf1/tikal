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

async function SQL(
  params: string,
  response: (error: Error, response: Response) => any
) {
  console.info(
    "-------------------------------------------------------------------------------------------------------------------------------------------------"
  );
  if (!params) {
    return { message: "A query precisa ser enviada" };
  }

  const client = await connect();
  try {
    // await client.release();
    console.info("SQL params: ", params);
    const res = await client.query(params, response);
    return res.rows;
  } catch (err) {
    console.clear();
    console.info(`Erro ${err}`);
    return { error: err.message };
  } finally {
    await client.release();
    // client.end();
  }
}

export default SQL;
