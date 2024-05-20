const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./schema_Models/user.js');
const Friends = require('./schema_Models/friend.js');
const cors = require('cors');
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://admin:admin123@friendscluster.x4xg0ne.mongodb.net/ChitChatDB?retryWrites=true&w=majority&appName=friendsCluster";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

    } catch (error) {
        console.error(error);
    }


}
connect();

app.listen(8000, () => {
    console.log("Server connected on port 8000");
});

app.get('/api/get', async(req, res)=>{
    const result = await User.find({});
    res.send(result);
})

app.post('/api/post', async(req,res)=>{
    const request_info = req.body;
    const newUser = new User(request_info); 
    await newUser.save();
    res.status(201);
})

app.post('/api/post/friend', async(req,res)=>{
    const request_info = req.body;
    const newFriend = new Friends(request_info); 
    await newFriend.save();
    res.status(201);
})

app.get('/api/get/friends/:username', async(req,res)=>{
    const username = req.params.username;
    console.log(username);
    const result = await Friends.find({user: username});
    res.send(result);
})
