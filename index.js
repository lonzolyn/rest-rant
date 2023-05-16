const express = require('express')
require('dotenv').config()
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places',require('./controllers/places'))
// app.use('/about',require('./controllers/places'))
app.get('*', (req, res) => {
    res.render('error404')
})
//app.get('*', (req, res) => {
  //  res.status(404).send('<h1>404 Page</h1>')
//})

app.listen(process.env.PORT)
