const jsonServer = require('json-server')
const path = require('path')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(cors()) // Allow CORS

// ✅ Serve static files from 'public' folder
server.use('/data/assets', jsonServer.defaults(), jsonServer.router('public'))

// Or use express-style:
server.use('/data/assets', require('express').static(path.join(__dirname, 'data/assets')))

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
