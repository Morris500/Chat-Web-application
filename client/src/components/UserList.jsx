import React, {useState, useEffect} from 'react'
import { Avatar, useChatChannel } from 'stream-chat-react'
import {InviteIcon} from "../assets/inviteIcon";

const ListContainer = ({children}) =>{
    return(
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = () =>{
    return(
        <div className='user-item__wrapper'>
            <div className='user-item__name-wrapper'>
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect () =>{
       const getUsers = async () =>{
        if(loading ) return;

        setLoading(true);
        try {
            
        } catch (error) {
            
        }
       } 
    }
  return (
    <ListContainer>
      UserList  
    </ListContainer>
  )
}

export default UserList