
const {MongoClient, ObjectId}=require('mongodb');


var obj = new ObjectId();
console.log(obj);
  MongoClient.connect('mongodb://localhost:27017/Lora',(err,db)=>{
  if(err)
  {
    console.log("Uanble to connect to the server ");
  }

    console.log("Connect to the server" );

   db.collection('lora').find().count().then((count)=>{
    console.log('lora count',count);
    // console.log(JSON.stringify(count,undefined,2));
  },(err)=>{
    console.log('could not found data',err);
  });
  db.close();
  });
