const mongoose = require ('mongoose');
const {schema} = mongoose;

const userShema = new Schema({
    email: {
        type : String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
},{
    timestamps: true,
})

const user = mongoose.Model('User', userShema);
module.exports = user;