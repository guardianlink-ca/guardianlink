require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// root (welcome)
app.get('/', (_req, res) => {
  res.json({ ok: true, app: 'GuardianLink running 🚀', version: 'v1' });
});

// status
app.get('/status', (_req, res) => {
  res.json({
    ok: true,
    app: 'GuardianLink',
    version: 'v1',
    time: new Date().toISOString(),
  });
});

// health
app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    app: 'GuardianLink',
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// echo (POST): send JSON and we echo it back
app.post('/api/echo', (req, res) => {
  res.json({
    ok: true,
    received: req.body,
    length: JSON.stringify(req.body ?? {}).length,
    time: new Date().toISOString(),
  });
});

// start server (for local dev)
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

