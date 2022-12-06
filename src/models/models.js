const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name :{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    created_date:{type:Date,default:Date.now(),required:true}
});

module.exports = {ProductSchema};

