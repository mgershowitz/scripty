'use strict'
const env        = process.env.NODE_ENV || 'development';
const DEV        = env === "development";
const dotenv     = require('dotenv').config()

const express    = require('express')
const morgan     = require('morgan')
const path       = require('path')
const bodyParser = require('body-parser')
const app        = express()
const port       = process.argv[2] || process.env.PORT || 3000

//app.set('superSecret', 'tacos')

app.use(morgan(DEV ? 'dev' : 'common'))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}))

app.listen(port, () => {
  console.log("server maxin\' and relax\' at ", port)
})


