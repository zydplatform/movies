const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res)=>{
	res.send('Hello world')
})

app.listen(apiPort, ()=>console.log(`Server is running on port ${apiPort}`))