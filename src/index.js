import express                    from 'express'
import http                       from 'node:http'
import path                       from 'node:path'
import { Server as SocketServer } from 'socket.io'

const app         = express()
const dirname     = path.resolve()

const httpServer  = http.createServer(app)

const io          = new SocketServer(httpServer)

app.use(express.static(path.join(dirname, "src", "client")))

app.get("/", (req, res) => res.render("index.html"))

io.on("connection", socket => console.log(`New client connected ${socket.id}!`))

httpServer.listen(4000, () => console.log("Server running on http://localhost:4000"))