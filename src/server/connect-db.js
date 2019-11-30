import { MongoClient } from "mongodb";
const url = `mongodb://root:example@localhost:27017/`;
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db("myorganizer");
  return db;
}
