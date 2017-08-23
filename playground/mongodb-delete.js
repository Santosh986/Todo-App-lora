
const {MongoClient, ObjectId}=require('mongodb');


var obj = new ObjectId();
console.log(obj);
  MongoClient.connect('mongodb://localhost:27017/Lora',(err,db)=>{
  if(err)
  {
    console.log("Uanble to connect to the server ");
  }

    console.log("Connect to the server" );

db.collection('lora').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
})
  });
