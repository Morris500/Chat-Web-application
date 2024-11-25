import React, {useSearch, useEffect, useState} from 'react';
import {usechatContext} from "stream-chat-react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
const [Query, setQuery] = useState('');
const [Loading, setLoading] = useState(false);


function getchannels(params) {
    try {
        //TODO
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

  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
                <SearchIcon />
            </div>
            <input className='channel-search__input__text' placeholder='search' type='text' value={query} onChange={onSearch} />
        </div>
    </div>
  )
}

export default ChannelSearch