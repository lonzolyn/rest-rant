const express = require('express')
require('dotenv').config()
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and Routes
app.use('/places',require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

// app.use('/about',require('./controllers/places'))
app.get('*', (req, res) => {
    res.render('error404')
})
//app.get('*', (req, res) => {
  //  res.status(404).send('<h1>404 Page</h1>')
//})

app.listen(process.env.PORT)
