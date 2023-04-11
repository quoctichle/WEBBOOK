const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 4444


// Khai báo dotenv
require('dotenv').config()

// Khai báo mongoose
var mongoose = require('mongoose')

// Connect database
 mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology: true,
   useNewUrlParser: true, })
 const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to Database'))




// Import routes
const IndexRouter = require("../src/routes/home")
// view engine setup
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Enable Static file
app.use(express.static('src/public'))

// Enable Method Override
app.use(methodOverride('_method'));

// Enable Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit:'10mb' ,extended: false }));  

// Enable Routes
app.use('/', IndexRouter)


app.listen(port, () => {
    console.log(`Server listening ${port}`)
})