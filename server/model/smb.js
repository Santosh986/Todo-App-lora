var mongoose=require('mongoose');


const Todo =mongoose.model('smb',{
  text :{
    type:String,
    required:true,
    minlength:5,
    trim:true
  },
completed:{
  type:Boolean,
  default:false
},

completedAt:{
  type:Number,
  default:null
}


});

module.exports={Todo};