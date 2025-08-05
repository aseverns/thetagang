import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let transactions = [];
let lots = [];
let tranches = [];

// Transactions endpoints
app.get('/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/transactions', (req, res) => {
  const transaction = { id: Date.now(), ...req.body };
  transactions.push(transaction);
  res.status(201).json(transaction);
});

app.put('/transactions/:id', (req, res) => {
  const { id } = req.params;
  transactions = transactions.map(t => t.id === Number(id) ? { ...t, ...req.body } : t);
  res.json({ message: 'Updated' });
});

app.delete('/transactions/:id', (req, res) => {
  const { id } = req.params;
  transactions = transactions.filter(t => t.id !== Number(id));
  res.json({ message: 'Deleted' });
});

// Lots endpoints
app.get('/lots', (req, res) => {
  res.json(lots);
});

app.post('/lots', (req, res) => {
  const lot = { id: Date.now(), ...req.body };
  lots.push(lot);
  res.status(201).json(lot);
});

app.put('/lots/:id', (req, res) => {
  const { id } = req.params;
  lots = lots.map(l => l.id === Number(id) ? { ...l, ...req.body } : l);
  res.json({ message: 'Updated' });
});

app.delete('/lots/:id', (req, res) => {
  const { id } = req.params;
  lots = lots.filter(l => l.id !== Number(id));
  res.json({ message: 'Deleted' });
});

// Summary endpoint
app.get('/summary', (req, res) => {
  res.json({
    shares: 0,
    currentValue: 0,
    totalPremium: 0,
    adjustedCostBasis: 0,
    adjustedCostPerShare: 0,
    plDollar: 0,
    plPercent: 0
  });
});

// Tranches endpoints
app.get('/tranches', (req, res) => {
  res.json(tranches);
});

app.post('/tranches', (req, res) => {
  const tranche = { id: Date.now(), ...req.body };
  tranches.push(tranche);
  res.status(201).json(tranche);
});

app.put('/tranches/:id', (req, res) => {
  const { id } = req.params;
  tranches = tranches.map(t => t.id === Number(id) ? { ...t, ...req.body } : t);
  res.json({ message: 'Updated' });
});

app.delete('/tranches/:id', (req, res) => {
  const { id } = req.params;
  tranches = tranches.filter(t => t.id !== Number(id));
  res.json({ message: 'Deleted' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
