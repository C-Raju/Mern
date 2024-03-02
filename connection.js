const { MongoClient } = require("mongodb");

const connection = async () => {
  const client = MongoClient.connect(
    "mongodb+srv://chandrashekharraju306:shekharraju2901@cluster0.uzldi.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = (await client).db("blog");
  return { db };
};

module.exports = { connection };
