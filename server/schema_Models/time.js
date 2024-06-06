const mongoose = require('mongoose');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const time = new Schema({
    fid:{
        type: Number,
        require: true
    },
    timeSpent:{
        type:Number,
        require: true
    },
    timeGoal:{
        type: Number,
        require: true
    }
});
// time.plugin(AutoIncrement, {inc_field:'fid'});
module.exports =  mongoose.model('timeinfos', time);