import React from 'react'
import {Avatar, useChatContext } from 'stream-chat-react';


const TeamChannelPreview = ({setActiveChannel, setIsCreating, setCreateType, setIsEditing, ToggelContanerchannel, channel, type}) => {
    const {channel: activeChannel, client} = useChatContext();

    const ChannelPreview = () => (
        <p className='channel-preview__item'>
            #{channel?.data?.name || channel?.data?.id}
        </p>
    );
    function DirectPreview() {
        const members = Object.values(channel.state.member).filter(({user}) => user.id !== client.userID)

        return (
            <div className='channel-preview__item single'>
                <Avatar image={members[0]?.user?.image} name={members[0]?.user?.fullName || members[0]?.user?.id} size={24}
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>
        )
    }
  return (
    <div className={channel?.id === activeChannel?.id ? "channel-preview__wrapper__selected" : "channel-preview__wrappper" } 
    onClick={() => {
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);

        if (setToggelContainer) {
            setToggelContainer((prevState) => !prevState)
        }
      }} >
        {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
       
  )
}

export default TeamChannelPreview