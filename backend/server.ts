import express from 'express';
import pool from './database';

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const bunnies: any[] = [];

//https://deadsimplechat.com/blog/rest-api-with-postgresql-and-node-js/

app.get('/', (req, res) => {
  res.send('👋🏽 Home page for bunny app!');
});

app.get('/bunnies', async (req, res) => {
  try {
    const bunnies = await pool.getBunnyData();
    res.status(200).json(bunnies);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/bunnyform', (req, res) => {
  const formData = req.body;
  console.log(formData);

  res.json({ message: 'BunData received successfully' });
});

app.post('/bunny', async (req, res) => {
  // bunnies.push(req.body);
  const data = await pool.createBunnyData(req.body);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
