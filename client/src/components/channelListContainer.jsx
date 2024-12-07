import React from "react";
import { ChannelList, userChatContext} from "stream-chat-react";
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

const ChannelListContainer = ({isCreating, setIsCreating, setCreatType, setIsEditing }) =>{
    
    return(
        <>
        <SideBar />
        <div className="channel-list__list__wrapper">
            <CompanyHeader />
            <p>ChannelListContainer</p>
            <ChannelSearch />
            <ChannelList filters={{}} channelRenderFilterFn={() => {}} List={(listProps) => ( <TeamChannelList {...listProps} type="team" 
            isCreating={isCreating} setIsCreating={setIsCreating} setCreatType={setCreatType} setIsEditing={setIsEditing}
            /> )} 
           
           Preview={(Previewprops) => (<TeamChannelPreview {...Previewprops} type="team" /> )}
           />

            <ChannelList filters={{}} channelRenderFilterFn={() => {}} List={(listProps) => ( <TeamChannelList {...listProps} type="messaging"
             isCreating={isCreating} setIsCreating={setIsCreating} setCreatType={setCreatType} setIsEditing={setIsEditing}
            /> )} 
           
           Preview={(Previewprops) => (<TeamChannelPreview {...Previewprops} type="messaging" /> )}
           />

        </div>
        </>
    )
}

export default ChannelListContainer;