require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ ok: true, app: 'GuardianLink running 🚀', version: 'v1' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



