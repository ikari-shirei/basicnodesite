const express = require('express')
const app = express()
const path = require('path')

const hostname = '127.0.0.1'
const port = 8080

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  res.sendFile('404.html', { root: '.' })
  res.status(404)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
