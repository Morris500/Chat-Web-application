import React from "react";
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components/index.js";
// import dotenv from "dotenv";
// dotenv.config();

const cookies = new Cookies;
const authToken = cookies.get('token');
const apiKey= process.env.REACT_APP_KEY;
const client = StreamChat.getInstance(apiKey);

console.log(apiKey);

if (authToken) {
  client.connectUser({ 
   name:cookies.get('username' ),
   fullName:cookies.get('fullName'),
   id:cookies.get('userId'),
   phoneNumber:cookies.get('phoneNumber'),
   avatarURL:cookies.get('avatarURL'),
   hashedPassword:cookies.get('hashedPassword'),
  }, authToken) 
} 
function App(params) {
   if(!authToken) {
      return <Auth />
   }
   return(
   <div className="app__wrapper">
      <Chat client={client} theme="team light">
         <ChannelListContainer />
         <ChannelContainer />
      </Chat>
   </div> 
   )
}

export default App;