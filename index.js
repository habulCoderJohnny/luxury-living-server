const express = require('express')
const app = express()
const cors = require('cors');
//const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(cors());
app.use(express.json());

//CONNECT TO MONGODB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.117wic5.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        console.log('db connected!!');
        const servicesCollection = client.db("luxury-living").collection("services");


        //GET myOWN Inserted DATA from MongoDB
        app.get('/services', async (req, res) => {
        const query = {};
        const cursor = servicesCollection.find(query);
        const services = await cursor.toArray();
        res.send(services);
      });
}

finally {

}


}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World from luxury-living developing server')
  })
  
  app.listen(port, () => {
    console.log(`luxury-living app listening on port ${port}`)
  })