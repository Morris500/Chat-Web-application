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
// Twilioclient(accountsid, authToken);
// const messageServiceSid = process.env.TWILIO_MESSAGE_SERVICE_SID;

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

app.get("/", (req, res) => {
    res.send('hello world')
})
app.post("/", (req, res) => {
    const {message, user: sender, type, members} = req.body;
    if(type === 'message.new'){
        members.filter((member) => member.user_id != sender.id).forEach(({user}) => {
            if(!user.online){
                twilioClient.message.create({
                    body: `you have a new message from ${message.user.fullName} - {message.text}`, 
                    messagingServiceSid: messagingServiceSid,
                    to: user.phoneNumber
                }) .then(() => console.log('Message sent!')
                .catch((err) => console.log(err)
                )
                )
        }})
       return res.status(200).send('message sent!'); 
    }
    return res.status(200).send('Not a new message request'); 
})
app.use("/", authRoutes);

app.listen(port, () => {console.log(`server running running on port ${port}`)
});