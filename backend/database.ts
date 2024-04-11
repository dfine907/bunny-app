import { Pool, PoolConfig } from 'pg';

// This sets up the PostgreSQL connection configuration
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
}

async function getBunnyData(): Promise<BunnyRow[]> {
  try {
    //just do a super simple test to get the bunny data from table bunny
    const result = await pool.query('SELECT * FROM bunny');

    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

getBunnyData()
  .then((data: BunnyRow[]) => {
    console.log('WE GOT BUNS:', data);
  })
  .catch((error) => {
    console.error('No got buns. Error:', error);
  });

export default { pool, getBunnyData };
