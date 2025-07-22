const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let quotes = [
  { quote: "The first draft is just you telling yourself the story.", person: "Terry Pratchett" },
  { quote: "Start before you are ready.", person: "Steven Pressfield" },
];

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.post('/api/quotes', (req, res) => {
  const newQuote = req.body;
  quotes.push(newQuote);
  res.status(201).json({ message: 'Quote added', quote: newQuote });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});