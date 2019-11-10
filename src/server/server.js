import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./connect-db";

let port = 8888;

let app = express();
app.listen(port, console.log("server listening on port ", port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

export const addNewTask = async task => {
  let db = await connectDB();
  let collection = db.collection(`tasks`);
  collection.insertOne(task);
};

app.post("/task/new", async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});
