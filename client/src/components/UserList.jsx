import React, {useState, useEffect} from 'react'
import { Avatar, useChatChannel, useChatContext } from 'stream-chat-react'
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
    const handelselector = () => {
        if (selected) {
            setSelectedUsers((prevuser) => prevuser.filter((preuser) => preuser != user.id) )
        } else {
            setSelectedUsers((prevuser) => [...prevuser, user.id])
        }
        setSelected((prevselected) => !prevselected)
    }
    return(
        <div className='user-item__wrapper' onClick={handelselector}>
            <div className='user-item__name-wrapper'>
                <Avatar imahe={user.image} name={user.fullName || user.id} size={32} />
                <p className='user-item__name'>{user.fullName || user.id}</p>
            </div>
          {selected ? <InviteIcon /> : <div className='user-itme__invite-empty'></div>}
        </div>
    )
}

const UserList = ({setSelectedUsers}) => {
    const [users, setUsers] = useState([]);
    const [client] = useChatContext();
    const [loading, setLoading] = useState(false);
    const [listEmpty, setListempty] = useState(false);
    const [error, seterror] = useState(false);

    useEffect (() => {
       const getUsers = async () =>{
        if(loading ) return;

        setLoading(true);
        try {
            const response = await client.queryUsers(
                {id:{$ne: client.userID}}, {id:1}, {limit: 8}
            );
            if(response.users.length) {
                setUsers(response.users);
            }else {
                setListempty(true);
            }
        } catch (error) {
            seterror(true);  
        }
        setLoading(false);
       } 
       if(client) getUsers()
    }, []);

  if(error) {
    return(
        <ListContainer>
            <div className='user-list__message'>
                Error loading, please refresh and try again.
            </div>
        </ListContainer>
    )
  }
  if(listEmpty) {
    return(
        <ListContainer>
            <div className='user-list__message'>
               No users found. 
            </div>
        </ListContainer>
    )
  }

  return (
    <ListContainer>
      {loading ? <div className='user-list__message'>
        loading users...
      </div> : (users?.map((user, i) => (<UserItem index={i} key={user.id} user={user} setSelectedUsers={setSelectedUsers} /> ))
    )}
    </ListContainer>
  )
}

export default UserList