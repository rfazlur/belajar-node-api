const express = require('express')
const mongoose = require('mongoose')
const app = express()

// routes
app.get('/', (req, res)=> {
    res.send('Hello from NODE API application')
})

app.get('/ping', (req, res)=> {
    res.send('PONG')
})

mongoose
.connect('mongodb+srv://admin:S7QQVBNrplWHaQtD@azkacluster.lxklmww.mongodb.net/node-api?retryWrites=true&w=majority&appName=AzkaCluster')
.then(() => {
    console.log('Connected to mongoDB')
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000');
    })
}).catch((error) => {
    console.log(error)
})