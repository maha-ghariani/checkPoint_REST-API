const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.Url || 'mongodb://localhost:27017'


const connectionDB = async () => {
    try {
        await mongoose.connect(url)
        console.log('connected successfully to DB')
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectionDB