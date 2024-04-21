const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kainoanishida:Kaicolton11%3B@cluster0.0u2oack.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const searchBus = require('./yelp');

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    client.connect();
    // const db = mongoose.connection;
    let categories = ["restaurants"]
    //get the yelp stuff here
    let data = {}
    
    for(let i=0; i < categories.length; i++){
      const info = await searchBus(categories[i]);
      data[categories[i]] = info;
    }
    console.log(Array.isArray(data[categories[0]]));

    // db.on("error", console.error.bind(console, "connection error:"));
    const db = client.db('hackathon');
    for (cat of categories){
        const collection = db.collection(cat);
        console.log(Array.from(data[cat]));
        await collection.insertMany(Array.from(data[cat]));
    }
    // db.once("open", async function() {
    //   console.log("Database connection is open.");
    //   //insert into db here
    //   for (cat of categories){
    //     const collection = db.collection(cat);
    //     await collection.insertMany(data[cat]);
    //   }
    // });
    

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

// run().catch(console.error);

const PORT = 3001;

// API to get users
app.get('/', async (req, res) => {
  try {
    const User = mongoose.model("User");
    const users = await User.find();  // Fetch all users from the database
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
