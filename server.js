const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user-model')
const app = express()

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello from NODE API application')
})

app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000');
})
 
app.get('/ping', (req, res) => {
    res.send('PONG')
})

app.get('/users', async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: error.message
        })
    }
})

app.post('/user', async(req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch(error) {
        console.log(error.message) 
        res.status(500).json({
            message: error.message
        })
    }
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