import React from 'react';
import { Channel, useChatContext } from 'stream-chat-react';
import {UserList} from './'
import {CloseCreateChannel} from '../assets/CloseCreateChannel'


const ChannelNameInput = ({channelName='', setChannelName}) => {
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
  return(
    <div className='create-channel__container'>
      <div className='create-channel__header'>
        <p>{createType === 'team' ? 'create a New channel' : 'send a Direct Message'}</p>
        <CloseCreateChannel setIsCreating={setIscreating} />
      </div>
      {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setchannelName} />}
      <UserList />
    </div>
  )
}

export default CreateChannel