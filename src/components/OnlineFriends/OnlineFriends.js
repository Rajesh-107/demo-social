import React, { useEffect, useState } from 'react';
import './OnlineFriends.scss'

const OnlineFriends = ({user}) => {
   
    return (
        <div className='online'>
            <li className='rightbarFriends'>
               <div className='rightbarprofileContainer'>
               <img src={user.profilePicture} className='rightbarProfile' alt=""/>
                <span className='rightbarOnline'></span>
               </div>
               <span className='rightbarUsername'>{user.name}</span>
            </li>
        </div>
    );
};

export default OnlineFriends;