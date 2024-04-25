import express from 'express';
import pool from './database';

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// const bunnies: any[] = [];
app.get('/', (req, res) => {
  res.send('Home page for bunny app!');
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


app.get('/breeds', async (req, res) => {
  try {
    const breeds = await pool.getBreedData();
    res.status(200).json(breeds);
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
  const data = await pool.createBunnyData(req.body);
  res.send(data);
});

app.put('/bunny/:id', async(req, res)=> {
  await pool.updateBunnyData(req.body)
  res.send("Bunny updated!")
})





app.delete('/bunny/:id', async (req, res) => {
  const message = await pool.deleteBunny(Number(req.params.id))
  res.send({message})
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
