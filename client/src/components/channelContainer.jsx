import React from 'react';
import {Channel, useChatContext, Message} from 'stream-chat-react';
import {ChannelInner, CreateChannel, EditChannel, TeamMessage} from './index';

const ChannelContainer = ({isCreating, setIscreating, isEditing, setIsEditing, createType}) => {

  const {channel} = useChatContext();
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
const EmptyState = () =>(
  <div className='channnel-empty__container'>
    <p className='channel-empty__first'>This is the beginning of your chat history.</p>
    <p className='channel-empty__second'>send message, attachments, links, emojis, and more!</p>
  </div>
)

  return (
    <div className='channel__container'>
      <p>helloe world</p>
      <Channel EmptyStateIndicatior={EmptyState}
      Message={(messageProps, i) => <Message key={i} {...messageProps} />} > 
      <ChannelInner setIsEditing={setIsEditing}/>
      </Channel>
    </div>
  )
}

export default ChannelContainer