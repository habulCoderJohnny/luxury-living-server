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

app.get('/', (req, res) => {
    res.send('Hello World from luxury-living developing server')
  })
  
  app.listen(port, () => {
    console.log(`luxury-living app listening on port ${port}`)
  })