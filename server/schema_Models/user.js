const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    bday:{
        type: String,
        require: true
    }
});
module.exports = mongoose.model('userInfo', user);