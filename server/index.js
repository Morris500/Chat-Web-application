import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
// import Twilioclient from 'twilio';

// const accountsid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTHTOKEN;
// twilioclient(accountsid, authToken);

//imported routes
import authRoutes from "../server/routes/auth.js";

// configuration middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 
const port = process.env.port || 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended : true}));
app.use(bodyParser.urlencoded({limit:"30", extended:true}));


app.use("/", authRoutes);

app.listen(port, () => {console.log(`server running running on port ${port}`)
});