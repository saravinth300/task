import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import router from "./routes/index.js";


dotenv.config()
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", router);




export default app;
