import express from 'express';

const app = express();
const port = 3000;

const cors = require('cors')

 
app.use(cors())

// Middleware - add middle which are just functions like authentification
// ROUTES using app.  Responding to client/user

app.use('/posts', (req, res, next)=> {
  const posts = [
    {
    id: '22',
    name: 'Lola',
    gender: "girl",
    breed: 'Rex',
    age: 4,
    weight: 6,
    content: "from the server"
    },
    {
      id: '23',
      name: 'Franciso',
      gender: "Boy",
      breed: 'Rex',
      age: 2,
      weight: 3,
      content: "from the server!!"
      }
  ]
  res.status(200).json({
    message: "Posts successful",
    posts: posts
  })
  //  next() middleware is not needed - we end here
})
app.get('/', (req, res) => {
  res.send('👋🏽 Hello from the backend!');
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