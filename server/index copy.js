import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

//imported routes
import router from "../server/routes/auth";

// configuration middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 
const port = process.env.port || 4000;

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended : true}));
app.use(bodyParser.urlencoded({limit:"30", extended:true}));

app.use("/", router);

app.listen(port, () => {console.log(`server running running on port ${port}`)
});