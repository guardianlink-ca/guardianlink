require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root
app.get('/', (_req, res) => {
  res.json({ ok: true, app: 'GuardianLink', version: 'v1' });
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

// echo (for prod + local)
app.post('/api/echo', (req, res) => {
  res.json({
    ok: true,
    received: req.body,
    length: JSON.stringify(req.body ?? {}).length,
    time: new Date().toISOString(),
  });
});

/**
 * IMPORTANT:
 * Export the Express app for Vercel.
 * Only call app.listen() when running locally (node index.js).
 */
module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
}

