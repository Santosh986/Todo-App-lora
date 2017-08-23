
const {MongoClient, ObjectId}=require('mongodb');


var obj = new ObjectId();
console.log(obj);
  MongoClient.connect('mongodb://localhost:27017/Lora',(err,db)=>{
  if(err)
  {
    console.log("Uanble to connect to the server ");
  }

    console.log("Connect to the server" );

db.collection('lora').findOneAndUpdate({ _id:new ObjectId('599d34c650d64310a887e984')},{
  $set:{
       text:'atik'
      }
   },
    {
     returnOriginal:false
}).then((result)=>{
  console.log(result);
})
  });
