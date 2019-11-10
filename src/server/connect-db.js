// import { MongoClient } from "mongodb";
var MongoClient = require("mongodb");
const url = `mongodb://root:example@localhost:27017/myorganizer`;
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true }).catch(
    err => console.log(err)
  );
  db = client.db();
  return db;
}
