const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user-model')
const app = express()

app.use(express.json())

// routes
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

app.get('/user/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
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

app.put('/user/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        if(!user) {
            return res.status(404).json({message: `Cannot update user with id ${id}`})
        }
        const update_user = await User.findById(id)
        res.status(200).json(update_user)
    } catch (error) {
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