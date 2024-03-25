import express from 'express';

const app = express();
const port = 3000;

// Middleware - add middle which are just functions like authentification

// ROUTES using app.  Responding to client/user

app.get('/', (req, res) => {
  res.send('Backend working');
});

app.post('/bunnyform', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: 'BunData received successfully' });
});

app.get('/moreinfo', (req, res) => {
  res.json( {message: 'Got More Bun Info data'})
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});