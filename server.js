import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

import mongoose from "mongoose";
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING ;
//const DB_CONNECTION_STRING = 'mongodb+srv://pavithraapanch:mongo2022*@cluster0.9u0sh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const CONNECTION_STRING = DB_CONNECTION_STRING
     || 'mongodb://localhost:27017/webdev'

mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected!"));;

const app = express();
app.use(cors());
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);