import React, { useState } from "react";
import { ChannelList, useChatContext, userChatContext} from "stream-chat-react";
import Cookies from "universal-cookie";
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./index";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const cookies = new Cookies();


const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width={30} />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div> 
);

const CompanyHeader = () =>(
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)

const customChannelTeamFilter = (channels) => {
    return ChannelSearch.filter((channel) => channel.type === 'team');
}
const customChannelMessagingFilter = (channels) => {
    return ChannelSearch.filter((channel) => channel.type === 'message');
}

const logout = () => {
    cookies.remove('token' );
    cookies.remove('username' );
    cookies.remove('fullName');
    cookies.remove('userId');
    cookies.remove('phoneNumber')
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');

    window.location.reload();
}

const ChannelListContent = ({isCreating, setIsCreating, setCreateType, setIsEditing, setToggelContainer }) =>{
    const {client} = useChatContext();
    const filters = {members:{$in: [client.userID]}}
    return(
        <>
        <SideBar />
        <div className="channel-list__list__wrapper">
            <CompanyHeader />
            <p>ChannelListContainer</p>
            <ChannelSearch stToggelContainer={setToggelContainer} />
            <ChannelList filters={{filters}} channelRenderFilterFn={customChannelTeamFilter} List={(listProps) => ( <TeamChannelList {...listProps} type="team" 
            isCreating={isCreating} setIsCreating={setIsCreating} setCreatType={setCreateType} setIsEditing={setIsEditing}
            setToggelContainer={setToggelContainer}
            /> )} 
           
           Preview={(Previewprops) => (<TeamChannelPreview {...Previewprops} 
            setCreateType={setCreateType} setIsEditng={setIsEditing} 
            setToggelContainer={setToggelContainer}type="team" /> )}
           />

            <ChannelList filters={{filters}} channelRenderFilterFn={customChannelMessagingFilter} List={(listProps) => ( <TeamChannelList {...listProps} type="messaging"
             isCreating={isCreating} setIsCreating={setIsCreating} setCreatType={setCreateType} setIsEditing={setIsEditing}
             setToggelContainer={setToggelContainer}
            /> )} 
           
           Preview={(Previewprops) => (<TeamChannelPreview {...Previewprops}
            setCreateType={setCreateType} setIsEditng={setIsEditing} 
            setToggelContainer={setToggelContainer}type="messaging" /> )}
           />

        </div>
        </>
    )
}    

const ChannelListContainer = ({setCreateType, setIsCreating, setIsEditing}) => {
const [toggleContainer, setToggelContainer] = useState(false);
return (
    <>
    <div className="channel-list__container">
        <ChannelListContent setIsCreaing={setIsCreating}
        setCreateTpe={setCreateType} setisEditng={setIsEditing} />
    </div>
    <div className="channel-list__container-responsive" style={{left: toggleContainer ? '0%' : '-89%', backgroungColor: '#005fff'}}>
        <div className="channel-list__container-toggel" onClick={() => setToggelContainer((prevToggelcontainer) => !prevToggelcontainer) }>
        </div>
        <ChannelListContent setIsCreaing={setIsCreating}
        setCreateTpe={setCreateType} setisEditng={setIsEditing} setToggelContainer={setToggelContainer} />
    </div>
    </>
)
}
export default ChannelListContainer;