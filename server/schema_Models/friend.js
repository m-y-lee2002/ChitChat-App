const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const friend = new Schema({
    fid:{
        type: Number,
        require: true
    },
    user:{
        type: String,
        require: true
    },
    imagePic:
    {
        type: String,
        require: true
    },
    fname:{
        type: String,
        require: true
    },
    bday:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: false
    },
    phoneNumber:{
        type: String,
        require: false
    },
    goalSet:{
        type: Boolean,
        require: true
    }

});
friend.plugin(AutoIncrement, {inc_field:'fid'});
module.exports =  mongoose.model('friendinfos', friend);