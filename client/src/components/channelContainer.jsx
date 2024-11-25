import {channelist, userChatContext} from "stream-chat-react";
import React from "react";
import Cookies from "universal-cookie";
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/Logout.png";

const SideBar = () => (
    <div className="channel-list_sidebar">
        <div className="channel-list_sidebar_icon1">
            <div className="icon1_inner">
                <img src={HospitalIcon} alt="Hospital" width={30} />
            </div>
        </div>
        <div className="channel-list_sidebar_icon2">
            <div className="icon1_inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () =>(
    <div className="channel-list_header">
        <p className="channel-list_header_text">Medical Pager</p>
    </div>
)

const ChannelListContainer = () =>{
    return(
        <>
        <SideBar />
        <div className="channel-list__list__wrapper">
            <CompanyHeader />
        </div>
        </>
    )
}

export default ChannelListContainer;