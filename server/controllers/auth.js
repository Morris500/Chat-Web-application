import {connect} from "getstream";
import bcrypt from "bcrypt";
import {StreamChat}  from "stream-chat"; 
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();


const APP_ID = process.env.APP_ID;
const API_KEY = process.env.API_KEY; 
const APP_SECRET = process.env.APP_SECRET;

async function signup (req, res) {
    try {
        const {fullName, username, password, phoneNumber} = req.body;
        const userId = crypto.randomBytes(16).toString('hex');
        const serverClient = connect(API_KEY, APP_SECRET, APP_ID);
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = serverClient.createUserToken(userId);

        res.status(200).json({token, fullName, username, userId, hashedPassword, phoneNumber}); 
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error})
    }
    
}
async function login(req, res) {
    try {
        const {username, password} = req.body;

    const serverClient = connect(API_KEY, APP_SECRET, APP_ID);
    const client =  StreamChat.getInstance(API_KEY, APP_SECRET, APP_ID);

    const {users} = await client.queryUsers({name:username});
console.log(users);
console.log(!users.length);
console.log(users.hashedPassword);

    if (!users.length) {
         res.status(400).json({message:'User not Found'});
    }
const success = await bcrypt.compare(password, users[0].hashedPassword);
console.log(success);

    
    if (success) {
        const token = serverClient.createUserToken(users[0].id);
        res.status(200).json({
            token, fullName:users[0].fullName, username, userId:users[0].id 
        }) ;  
    } else {
        res.status(400).json({message:'Incorrect Password'})
    }
    } catch (error) {
        console.log(error);
        
     res.status(500).json({message:error})   
    }
    
}

export {signup, login};