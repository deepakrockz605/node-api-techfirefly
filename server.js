var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://user:pass@123@ds221095.mlab.com:21095/heroku_01xw8jh6'

mongoose.set('useCreateIndex', true)
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true , useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})