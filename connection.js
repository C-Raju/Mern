const { MongoClient } = require("mongodb");

const connection = async () => {
  const client = MongoClient.connect(
    "mongodb+srv://chandrashekharraju306:29@shekhar@cluster0.7a0l0dg.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = (await client).db("blog");
  return { db };
};

module.exports = { connection };
