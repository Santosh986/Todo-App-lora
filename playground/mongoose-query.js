const {mongoose} = require ('./../server/db/mongoose');
const {Todo}  =  require ('./../server/model/smb');

var id= '699e7fbf042070d817d496bb';

// Todo.find({_id:id}).then((doc)=>{
//   console.log('todos',doc);
// });
Todo.find({_id:id}).then((smbs)=>{
  console.log('todos',smbs);
});


Todo.findOne({_id:id}).then((smb)=>{
  console.log('todos',smb);
});

Todo.findById(id).then((smb)=>{
  if(!smb){
    return console.log('Id is not found');
  }
  console.log('todos',smb);
});
