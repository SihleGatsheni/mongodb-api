const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://codeit:199512nd@codehub-o7ubp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


router.get('/', (req, res)=>{

client.connect(err => {
  const collection = client.db("onlineStore").collection("users");
  // perform actions on the collection object
  collection.find().toArray((err, documents) => {
  	if(err) {
  		throw err;
  	}
  	res.send(documents)
  })
  client.close();
});

})

router.post('/', (req, res) =>{
	
client.connect(err => {
  const collection = client.db("onlineStore").collection("users");
  
collection.insertOne(req.body,(err, results) => {
  	if(err){
  		throw err;
  	}
  	res.send(results.insertedId);
  	})

  client.close();
})

});

module.exports = router;