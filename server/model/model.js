const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    repo:{
        type:String,
        required:true,
        unique:true
    },
    weburl:{
        type:String,
        required:false,
        unique:true
    },
    issues:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean
    },

    description:{
        type:String,
        required:false
    }
  

})

const Projectdb=mongoose.model('projectdb',schema);

module.exports=Projectdb;