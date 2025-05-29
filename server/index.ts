import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import session from 'express-session';
import MemoryStore from 'memorystore';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5000;

// Session setup
const MemoryStoreSession = MemoryStore(session);
app.use(
  session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStoreSession({
      checkPeriod: 86400000,
    }),
    resave: false,
    secret: 'keyboard cat',
    saveUninitialized: false,
  })
);

// Serve static files from the dist/public directory
app.use(express.static(join(__dirname, '../dist/public')));

// API routes go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve the index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});