import express from "express";
import mongoose from "mongoose";
import { addUsers,getUserById,getUsers } from "./controller/UserController.js";
import route from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(cors());


app.use("/users", route);
app.use("/add",addUsers);
app.use("/",getUsers);
app.use("/edit/:id",getUserById);
const PORT = 5000;
const URL ='mongodb://user1:reactjs@crud-app-shard-00-00.rldvq.mongodb.net:27017,crud-app-shard-00-01.rldvq.mongodb.net:27017,crud-app-shard-00-02.rldvq.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-zqrk3c-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
  })
  .then(() => {
    app.listen(PORT, () => {console.log(` hi server  is running on ${PORT}`)});
      })
  .catch((error) => {
    console.log("error", error.message);
  });
