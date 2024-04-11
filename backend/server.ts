import express from 'express';
import pool from './database';

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const bunnies: any[] = [];

//Old code:
// app.get('/bunnies', (req, res, next) => {
//   res.status(200).json(bunnies);
// });

//https://deadsimplechat.com/blog/rest-api-with-postgresql-and-node-js/

app.get('/bunnies', async (req, res) => {
  try {
    const bunnies = await pool.getBunnyData();
    res.status(200).json(bunnies);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('👋🏽 Home page for bunny app!');
});

app.get('/bunnyform', (req, res) => {
  const formData = req.body;
  console.log(formData);

  res.json({ message: 'BunData received successfully' });
});

app.post('/bunny', (req, res) => {
  bunnies.push(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
