import express from 'express';
import './db/mongoose.js';
import { Card} from './models/carta_mongoose.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/cards', (req, res) => {
  const card = new Card(req.body);

  card.save().then((card) => {
    res.send(card);
  }).catch((error) => {
    res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
