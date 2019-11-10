import { defaultState } from "./defaultState";
import { connectDB } from "./connect-db";

async function initializeDB() {
  let db = await connectDB();
  console.log(db.collection("test"));
  for (let collectionName in defaultState) {
    let collection = db.collection(collectionName);
    await collection
      .insertMany(defaultState[collectionName])
      .catch(err => console.log(err));
  }
}

initializeDB();
