// index.js
import jsonServer from 'json-server';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Setup __dirname in ES module environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app and JSON Server router
const server = express();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());

// Serve static image assets (like profile_pic_1.jpeg etc.)
server.use('/data/assets', express.static(path.join(__dirname, 'data', 'assets')));

// Use default middlewares (logger, etc.)
server.use(middlewares);

// Mount the router
server.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running at http://localhost:${PORT}`);
});
