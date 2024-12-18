import React, {useSearch, useEffect, useState} from 'react';
import {usechatContext} from "stream-chat-react";
// import { SearchIcon } from "../assets";

const ChannelSearch = ({setToggelContainer}) => {
const {client, setActiveChannel } = usechatContext();
const [query, setQuery] = useState('');
const [loading, setLoading] = useState(false);
const [teamChannels, setTeamChannels] = useState([]);
const [directChannels, setDirectChannels] = useState([]);

useEffect(() => {
    if (!query) {
        setTeamChannels([]);
        setDirectChannels([]);
    }
}, [query])
function getchannels(params) {
    try {
        const channelResponse = client.queryChannels({
            type: 'team',
            namme: {$autocomplete: text},
            members: {$in: [client.userID]}
        })
        const userResponse = client.queryUser({
            id:{$ne: client.userId},
            name:{ $autocomplete: text}
        })
        const [channels, {users}] = awaitpromise.all({channelResponse,userResponse});

        if (channels.length) {
            setTeamChannels(channels);
        }
        if (users.length) {
            setDirectChannels(users);
        }
    } catch (error) {
        setQuery("");
    }
}

const onSearch = (event) =>{
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getchannels(event.target.value);

}
const setChannel = (channel) => {
    setQuery('');
    setActiveChannel(channel);
}
  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                {/* <SearchIcon /> */}
            </div>
            <input className='channel-search__input__text' placeholder='search' type='text' value={query} onChange={onSearch} />
        </div>
        {query && (<ResultsDropdown teamChannels={teamChannels} directChannels={directChannels} loading={loading} setChannel={setChannel} setQuery={setQuery} setToggelContainer={setToggelContainer} />
    )}
    </div>
  )
}

export default ChannelSearch