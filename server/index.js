const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = 3000

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res)=>{
	res.send('Hello world')
})
app.use('/api', movieRouter)

app.listen(apiPort, ()=>console.log(`Server is running on port ${apiPort}`))