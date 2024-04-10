import { Pool, PoolConfig } from 'pg';

// PostgreSQL connection configuration
const poolConfig: PoolConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'bunnydb',
  port: 5432,
};

// Create a new Pool instance with PostgreSQL connection configuration
const pool: Pool = new Pool(poolConfig);

async function getBunnyData() {
  try {
    const result = await pool.query('SELECT * FROM bunny');

    return result.rows;
  } catch (error) {
    
    console.error('Error executing query:', error);
    throw error; 
  }
}

getBunnyData()
  .then((data) => {
    console.log('WE GOT BUNS:', data);
  })
  .catch((error) => {
    console.error('No buns. Error:', error);
  });

export default pool;
