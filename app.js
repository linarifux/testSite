const express = require('express')
const PORT = process.env.PORT || 5000
const DB = require('./src/db/db')
const customerRoute = require('./src/route/user')
const productRoute = require('./src/route/product')

const app = express()

app.listen(PORT, () => console.log(`server started listening on port: ${PORT}`))


// Middleware
app.use(express.json())


// customer route
app.use(customerRoute)

// product route
app.use(productRoute)