const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test-site', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => console.log("DB Connected...."))


module.exports = mongoose