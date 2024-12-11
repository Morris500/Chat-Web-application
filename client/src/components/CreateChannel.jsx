import React, { useState } from 'react';
import { Channel, useChatContext } from 'stream-chat-react';
import {UserList} from './'
import {CloseCreateChannel} from '../assets/CloseCreateChannel'


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

const CreateChannel = ({createType, setIscreating}) => {
  const [channelName, setchannelName] = useState('');
  const {client, setActiveChannel} = useChatContext();
  const [selectedUsers, setSelectionUsers] = useState('');

  const createChannel = async(e) =>{
    e.preventDefault();
    try {
      const newChannel = await client.channel(createType, channelName, {name: channelName, members: selectedUsers });
      await newChannel.watch();
      setchannelName('');
      setIscreating(false);
    } catch (error) {
      
    }
  }

  return(
    <div className='create-channel__container'>
      <div className='create-channel__header'>
        <p>{createType === 'team' ? 'create a New channel' : 'send a Direct Message'}</p>
        <CloseCreateChannel setIsCreating={setIscreating} />
      </div>
      {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setchannelName} />}
      <UserList  setSelectedUsers={setSelectedUsers} />
      <div className='create-channel__button-wrapper' onClick={createchannel}>
        <p>{createType === 'team' ? 'create channel' : 'Create Message Group'}</p>
      </div>
    </div>
  )
}

export default CreateChannel