import jsonServer from 'json-server'
import path from 'path'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json')) // ✅ FIXED PATH
const middlewares = jsonServer.defaults()

server.use(cors())
server.use('/data/assets', express.static(path.join(__dirname, 'data/assets'))) // ✅ STATIC FILES
server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`)
})
