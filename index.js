const http = require('http')
var fs = require('fs')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile('./index.html', (err, html) => {
      if (err) throw err

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(html)
      res.end()
    })
  } else if (req.url === '/about.html') {
    fs.readFile('./about.html', (err, html) => {
      if (err) throw err

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(html)
      res.end()
    })
  } else if (req.url === '/contact-me.html') {
    fs.readFile('./contact-me.html', (err, html) => {
      if (err) throw err

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(html)
      res.end()
    })
  } else {
    fs.readFile('./404.html', (err, html) => {
      if (err) throw err

      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html')
      res.write(html)
      res.end()
    })
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
