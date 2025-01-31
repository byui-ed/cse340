/* ***********************
 * Middleware
 * ************************/
app.use(session({
    store: new (require('connect-pg-simple')(session))({
      createTableIfMissing: true,
      pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    name: 'sessionId',
  }))
const session = require("express-session")
const pool = require('./database/')
const baseController = require("./controllers/baseController")

// Express Messages Middleware
app.use(require('connect-flash')())
app.use(function(req, res, next){
  res.locals.messages = require('express-messages')(req, res)
  next()
})


// Account routes
app.use("/account", require("./routes/accountRoute"))


const bodyParser = require("body-parser")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded