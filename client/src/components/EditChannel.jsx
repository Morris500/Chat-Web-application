import React, { useState } from 'react';
import {UserList} from './';
import {CloseCreateChannel} from '../assets';
import { useChatContext } from 'stream-chat-react';

const ChannelNameInput = ({channelName='', setChannelName}) => {
  const {client, setActiveChannnel} = useChatContext();
  const [selectdUsers, setSelectedUsers] = useState([client.userID || ""])
  const handelchange = (e) =>{
    e.preventDefault();
    setChannelName(e.target.value);
  }
  return (
    <div className='channel-name-input__wrapper'>
      <p>Name</p>
      <input value={channelName} onChange={handelchange} placeholder='channnel-name (no spaces)' />
      <p>Add Member</p>
    </div>
  )
}

const EditChannel = ({setIsEditing}) => {
  const {channel} = useChatContext();
  const [channelName, setChannelName] = useState(channel?.data?.name);
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  const updateChannel = async (e) => {
    e.preventDefault();
    const nameChange = channelName !=== (channel.data.nsme || channel.data.id);

    if(nameChange) {
      await channel.update({name: channel}, {text: 'Channel name change to ${channelName}'});
    }
  }
  if(selectedUsers.length) {
    await channel.addMembers(selectedUsers); 
  }
   
  setChannelName(null);
  setIsEditing(false);
  setSelectedUsers([]);
  }
  return (
    <div className='edit-channel__container'>
      <div className='edit-channel__header'>
        <p>Edit Channel</p>
        <CloseCreateChannel setIsediting={setIsEditing} />
      </div>
      <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />
      <UserList setSelectedUsers={setSelectedUsers} />
      <div className='edit-channel__button-wrapper' onClick={updateChannel}>
        <p>Save Changes</p>
      </div>
    </div>
  )
}

export default EditChannel