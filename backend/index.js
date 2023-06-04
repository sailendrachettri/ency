const connectToMongo = require('./db')
const express = require('express')
connectToMongo()

const app = express()
const port = 5000

app.use(express.json())

// routing
app.use('/v1/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
