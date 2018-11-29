import express from 'express'
import jwtMiddleWare from './jwtMiddleWare'

const port = 49360
const app = express()

app.use(express.static(__dirname))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.listen(port, () => {
  console.log('listeneing on port ' + port)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/verify', jwtMiddleWare, (req, res) => {
  res.json({ success: 200 })
})
