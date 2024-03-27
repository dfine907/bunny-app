import express from 'express';

const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

app.use(express.json());


app.use('/posts', (req, res, next)=> {
  const posts = [
    {
    id: '22',
    name: 'Lola',
    gender: "girl",
    breed: 'Rex',
    age: 4,
    content: "This is from the server"
    }
  ]
  res.status(200).json({
    message: "Posts successful",
    posts: posts
  })
  //  next() middleware is not needed - end here
})

app.get('/', (req, res) => {
  res.send('👋🏽 Hello from the backend!');
});

app.get('/bunnyform', (req, res) => {
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