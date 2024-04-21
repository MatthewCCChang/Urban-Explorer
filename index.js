const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;

const { searchBus, getAdditionalInfo } = require("./yelp.js");

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://kainoanishida:Kaicolton11%3B@cluster0.0u2oack.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    // const db = mongoose.connection;
    let categories = ["hiking"];
    //get the yelp stuff here
    let data = {};

    for (let i = 0; i < categories.length; i++) {
      let info = await searchBus(categories[i]); //should be an array
      console.log(info);
      for (let j = 0; j < info.length; j++) {
        //   const add = await getAdditionalInfo(info[j]._id);
        //   console.log(add);
        //   info[j].photos = add[0];
        //   info[j].hours = add[1];
        //   info[j].rating = add[2];
        //   info[j].likes = add[3];
        info[j].rating = 1.0;
        info[j].likes = 0;
      }
      data[categories[i]] = info;
    }
    // console.log(Array.isArray(data[categories[0]]));

    // db.on("error", console.error.bind(console, "connection error:"));
    const db = client.db("hackathon");
    for (cat of categories) {
      const collection = db.collection(cat);
      // console.log(Array.from(data[cat]));
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

// API to get users
app.get("/restaurants", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    let result = client.db("hackathon").collection("restaurants").find(); //returns all
    const restaurants = await result.toArray();
    res.send(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.get("/activities", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    let result = client.db("hackathon").collection("activities").find(); //returns all
    const activities = await result.toArray();
    console.log(activities);
    res.send(activities);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.get("/hikes", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    let result = client.db("hackathon").collection("hiking").find(); //returns all
    const hikes = await result.toArray();
    res.send(hikes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.post("/restaurant/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    const filter = { _id: id };
    const update = {
      $inc: {
        likes: 1,
      },
    };
    let result = await client
      .db("hackathon")
      .collection("restaurants")
      .findOneAndUpdate(filter, update); //returns all
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.post("/activity/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    const filter = { _id: id };
    const update = {
      $inc: {
        likes: 1,
      },
    };
    let result = await client
      .db("hackathon")
      .collection("activities")
      .findOneAndUpdate(filter, update); //returns all
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.post("/hike/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    console.log("Connected to MongoDB successfully.");
    const filter = { _id: id };
    const update = {
      $inc: {
        likes: 1,
      },
    };
    let result = await client
      .db("hackathon")
      .collection("hiking")
      .findOneAndUpdate(filter, update); //returns all
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.get("/restaurant/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    console.log("Connected to MongoDB successfully.");

    const query = {
      _id: { $eq: id },
    };
    let result = await client
      .db("hackathon")
      .collection("restaurants")
      .findOne(query); //returns all
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.get("/activity/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    console.log("Connected to MongoDB successfully.");

    const query = {
      _id: { $eq: id },
    };
    let result = await client
      .db("hackathon")
      .collection("activities")
      .findOne(query); //returns all
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

app.get("/hike/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    console.log("Connected to MongoDB successfully.");

    const query = {
      _id: { $eq: id },
    };
    let result = await client
      .db("hackathon")
      .collection("hiking")
      .findOne(query); //returns all
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users from the database.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
