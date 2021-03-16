const express = require('express')
const admin = require('./routes/admin')
const nunjucks =  require('nunjucks')
const logger = require('morgan')
const app = express()
const port = 3000

nunjucks.configure('template', {
  autoescape: true,
  express : app
})
//미들웨어 셋팅
app.use(logger('dev'));
app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!!!!!!@@@@@@@@!')
})

app.use( '/admin' , admin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})