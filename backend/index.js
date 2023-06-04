const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors');

connectToMongo()

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

// routing
app.use('/v1/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
