const { MongoClient } = require("mongodb");

const connection = async () => {
  const client = MongoClient.connect(
    "mongodb+srv://Shekhar29:123@ONLINESTUDY.y7phxhh.mongodb.net/blog?retryWrites=true&w=majority"
  );
  const db = (await client).db("blog");
  return { db };
};

module.exports = { connection };
