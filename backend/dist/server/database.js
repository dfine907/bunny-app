"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Below sets up the PostgreSQL connection configuration
// https://stackoverflow.com/questions/57853681/how-to-connect-a-database-to-an-angular-web-application
// https://clouddevs.com/express/postgresql/#:~:text=Integrating%20Express.,handle%20data%20retrieval%20and%20insertion
const poolConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'bunnydb',
    port: 5432,
};
// Creates a new Pool instance with PostgreSQL connection configuration
const pool = new pg_1.Pool(poolConfig);
async function getBunnyData() {
    return pool.query('SELECT bunny_id, name, breed, gender, dob, age, breed_name AS bun_breed_name FROM bunny INNER JOIN breed ON breed.breed_id = bunny.breed').then((res) => {
        return res.rows;
    });
}
async function getBreedData() {
    return pool.query('SELECT * FROM breed').then((res) => {
        return res.rows;
    });
}
// *  💥 UPDATE FUNCTION  * 
// async function updateBunnyData (bunny: BunnyRow): Promise<QueryResult<BunnyRow>> {
//   const text = `UPDATE bunny SET name=${bunny.name}, gender=${bunny.gender}, breed=${bunny.breed}, dob=${bunny.dob}, age=${bunny.age} WHERE bunny_id = ${bunny.bunny_id} RETURNING *`;
//   console.log({text})
//   return pool.query(text);
// }
// USED THIS WEB SITE TO REFACTOR:  https://node-postgres.com/features/queries
async function updateBunnyData(bunny, bunnyId) {
    const query = `
    UPDATE bunny 
    SET 
      name = COALESCE($1, name), 
      gender = COALESCE($2, gender), 
      breed = COALESCE($3, breed), 
      dob = COALESCE($4, dob), 
      age = COALESCE($5, age) 
    WHERE bunny_id = $6
    RETURNING *;
  `;
    const values = [bunny.name, bunny.gender, bunny.breed, bunny.dob, bunny.age, bunnyId];
    try {
        const result = await pool.query(query, values);
        return result.rows[0]; // Assuming you want to return the updated bunny data
    }
    catch (error) {
        console.error('Failed to update bunny:', error);
        throw error;
    }
}
async function createBunnyData(bunny) {
    console.log("createBunnyData: ", { bunny });
    if (!bunny.breed) {
        bunny.breed = 1;
    }
    const text = `
    INSERT INTO bunny(name, gender, breed, dob, age)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *`;
    const values = [bunny.name, bunny.gender, bunny.breed, bunny.dob, bunny.age];
    return pool.query(text, values);
}
async function deleteBunny(bunnyId) {
    const result = await pool.query(`DELETE FROM bunny WHERE bunny_id = ${bunnyId} RETURNING *`);
    if (result.rowCount === 0) {
        return 'Bunny Id not found';
    }
    return 'Message: Bunny deleted';
}
exports.default = {
    pool,
    getBunnyData,
    createBunnyData,
    getBreedData,
    updateBunnyData,
    deleteBunny,
};
