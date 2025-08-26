require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (_req, res) => {
  res.json({ ok: true, app: 'GuardianLink running 🚀', version: 'v1' });
});

// Status endpoint
app.get('/status', (_req, res) => {
  res.json({
    ok: true,
    app: 'GuardianLink',
    version: 'v1',
    time: new Date().toISOString()
  });
});

// Health endpoint
app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    app: 'GuardianLink',
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




