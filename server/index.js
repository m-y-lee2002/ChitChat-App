const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./schema_Models/user.js');

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

// const newUser = new User({
//     username: 'admin',
//     password: 'admin123',
//     bday: '02/03/2002'
// });

// newUser.save().then(() => {
//     console.log('User saved successfully');
// }).catch(err => {
//     console.error('Error saving user: ', err);
// });