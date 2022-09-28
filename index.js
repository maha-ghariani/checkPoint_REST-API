require('dotenv').config({ path: './config/.env' })
//console.log(process.env)
const port = process.env.Port || 7000
const connectionDB = require('./config/connectionDB')
const express = require('express');
const userRoute=require('./Routes/userRoute')



const app = express()
//createv server 
app.listen(port, (e) => {
    if (e) {
        console.log('server failed')
    }
    else {
        console.log(`server is running on port ${port}`)
    }
})

//connecte to db
connectionDB()


app.use(express.json())
app.use('/api',userRoute)




