import React from 'react';
import './Friends.scss';

const Friends = () => {
    return (
        <div>
             <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt=""/>
                    <span className='friendname'>John <br/> <p className='connections'>12 connections</p> </span>
                    
                </li>
               
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt=""/>
                    <span className='friendname'>John <br/> <p className='connections'>12 connections</p> </span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt=""/>
                    <span className='friendname'>John <br/> <p className='connections'>9 connections</p> </span>
                </li>
                <li className='sidebarFriend'>
                    <img className='sidebarFriendImg' src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt=""/>
                    <span className='friendname'>John <br/> <p className='connections'>12 connections</p> </span>
                </li>
        </div>
    );
};

export default Friends;