const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type: String,
        require:true,
        unique:true,
        trim:true,
        minlength:3
    }
});
const User = mongoose.model("User",UserSchema);

module.exports = User;