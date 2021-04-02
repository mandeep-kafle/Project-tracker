const mongoose=require('mongoose');
var a;
var schema=new mongoose.Schema({
    date:{
        type:String,
        a:Date.now.toString(),
        default:a,
       
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
        required:false
    },
    status:{
        type:String,
        default:"active"
    },

    description:{
        type:String,
        required:false
    }
  

})

const Projectdb=mongoose.model('projectdb',schema);

module.exports=Projectdb;