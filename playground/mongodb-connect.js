  //const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectId}=require('mongodb');


var obj = new ObjectId();
console.log(obj);
  MongoClient.connect('mongodb://localhost:27017/Lora',(err,db)=>{
  if(err)
  {
    console.log("Uanble to connect to the server ");
  }

    console.log("Connect to the server" );

  // db.collection('lora').insertOne({
  //   text: 'hello',
  //    completed: false
  // }, (err, result) =>{
  //       if(err)
  //     {
  //      return  console.log('Unable to insert into lora',err);
  //     }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('user').insertOne({
  //   name: 'Andrew',
  //    age:  25,
  //   location : 'UK',
  //   completed:false,
  //
  // }, (err, result) =>{
  //       if(err)
  //     {
  //      return  console.log('Unable to insert into lora',err);
  //     }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });
    db.close();
  });
