import jsonServer from 'json-server'
import path from 'path'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'

// Needed to replicate __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(cors())

// Serve static files like images from 'data/assets'
server.use('/data/assets', express.static(path.join(__dirname, 'data/assets')))

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`)
})
