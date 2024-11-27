import React from "react";
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components/index.js";

const authToken = false;
const apiKey= process.env.REACT_APP_KEY;
const client = StreamChat.getInstance(apiKey);

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