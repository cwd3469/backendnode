const express = require('express')
const admin = require('./routes/admin')
const nunjucks =  require('nunjucks')
const app = express()
const port = 3000

nunjucks.configure('template', {
  autoescape: true,
  express : app
})
 
app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!!!!!!@@@@@@@@!')
})

app.use( '/admin' , admin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})