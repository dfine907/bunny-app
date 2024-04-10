import express from 'express';

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

const bunnies: any[] = [
];

app.get('/bunnies', (req, res, next) => {
  res.status(200).json(bunnies);
  
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

// app.get('/moreinfo', (req, res) => {
//   res.json( {message: 'Got More Bun Info data'})
// })

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
