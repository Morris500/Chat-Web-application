import React from 'react';
import { AddChannel } from "../assets/Addchannel";

const TeamChannelList = ({children, error = false, loading, type, isCreating, setIsCreating, setCreatType, setIsEditing}) => {
    if (error) {
    return type === "team" ? ( <div className='team-channel-list'>
        <p className='team-channel-list__message'> Connection error, please wait a moment and try again. </p>
    </div> ) : null }

    if (loading) {
        return(
            <div className='team-channel-list'>
        <p className='team-channel-list__message'> {type === "team" ? "channels": "message"} loading... </p>
         </div>
        )
    }
//console.log(children);

  return (
    <div className='team-channel-list'>
        <div className='team-channel-list__header'>
            <p className='team-channel-list__header__title'>
                {type ==="team" ? "channels" : "Direct Message"} </p>
                <AddChannel 
                isCreating={isCreating} setIsCreating={setIsCreating} setCreatType={setCreatType} setIsEditing={setIsEditing}
                type ={type === "team" ? "team" :"messaging" }
                />
        </div>
        {children}
    </div>
  )
}

export default TeamChannelList