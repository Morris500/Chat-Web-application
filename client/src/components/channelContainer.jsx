import React from 'react';
import {Channel, useChannelContext} from 'stream-chat-react';
import {ChannelInner, CreateChannel, EditChannel, TeamMessage} from './index';

const channelContainer = ({isCreating, setIscreating, isEditing, setIsEditing, createType}) => {

  const {channel} = useChatChannel();
if (isCreating) {
  return(
    <div className='channel__container'>
      <CreateChannel createType={createType} setisCreating={setIscreating} />
    </div>
  )
}

if (isEditing) {
  return(
    <div className='channel__container'>
      <EditChannel setIsEditing={setIsEditing} />
    </div>
  )
}
const EmptyState = () =>{
  <div className='channnel-empty__container'>
    <p className='channel-empty__first'>This is the brginning of your chat history.</p>
    <p className='channel-empty__second'>send message, attachments, links, emojis, and more!</p>
  </div>
}

  return (
    <div>channelContainer</div>
  )
}

export default channelContainer