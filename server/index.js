const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./schema_Models/user.js');
const Friends = require('./schema_Models/friend.js');

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
