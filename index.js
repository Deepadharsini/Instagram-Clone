import jsonServer from 'json-server';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

// ✅ Set CORS options
const corsOptions = {
  origin: 'https://instagram-clone-deepadharsinis-projects.vercel.app', // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

server.use(cors(corsOptions));

// ✅ Optional: custom CORS headers if needed
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://instagram-clone-deepadharsinis-projects.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Serve static files (images, etc.)
server.use('/data/assets', express.static(path.join(__dirname, 'data', 'assets')));

// Use logger, etc.
server.use(middlewares);

// ✅ Route starts directly at /
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running at http://localhost:${PORT}`);
});
