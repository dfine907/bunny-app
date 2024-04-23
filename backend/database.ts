import { Pool, PoolConfig } from 'pg';

// Below sets up the PostgreSQL connection configuration
// https://stackoverflow.com/questions/57853681/how-to-connect-a-database-to-an-angular-web-application
// https://clouddevs.com/express/postgresql/#:~:text=Integrating%20Express.,handle%20data%20retrieval%20and%20insertion
const poolConfig: PoolConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'bunnydb',
  port: 5432,
};

// Creates a new Pool instance with PostgreSQL connection configuration
const pool: Pool = new Pool(poolConfig);

//this may change
interface BunnyRow {
  id: number;
  name: string;
  breed: number;
  gender: string;
  dob: string;
  age: number;
}

interface BreedRow {
  breed_id: number;
  breed_name: number;
}

async function getBunnyData(): Promise<BunnyRow[]> {
  return pool.query('SELECT * FROM bunny').then((res) => {
    return res.rows;
  });
}

async function getBreedData(): Promise<BreedRow[]> {
  return pool.query('SELECT * FROM breed').then((res) => {
    return res.rows;
  });
}

async function createBunnyData(bunny: any): Promise<any> {
  const text =
    'INSERT INTO bunny(name, gender, breed, dob, age) VALUES($1, $2, $3, $4, $5) RETURNING *';
  const values = [bunny.name, bunny.gender, bunny.breed, bunny.dob, bunny.age];
  return pool.query(text, values);
}

async function deleteBunny(bunnyId: number): Promise<string> {
  const result = await pool.query(
    `DELETE FROM bunny WHERE bunny_id = ${bunnyId} RETURNING *`
  );

  if (result.rowCount === 0) {
    return 'Bunny Id not found';
  }

  return 'Message: Bunny deleted';
}

export default {
  pool,
  getBunnyData,
  createBunnyData,
  getBreedData,
  deleteBunny,
};
