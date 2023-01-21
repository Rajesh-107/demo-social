import React from 'react';
import './Sidebar.scss';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Menubar from '../Menubar/Menubar';
import Friends from '../Friends/Friends';
import Users from '../../fakeData'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
               <Menubar Icon={<FeedOutlinedIcon/>} text="NewsFeed"/>
               <Menubar Icon={<BadgeOutlinedIcon/>} text="Badge"/>
               <Menubar Icon={<WorkOutlineOutlinedIcon/>} text="Job Group"/>
               <Menubar Icon={<GroupsOutlinedIcon/>} text="Your Group"/>
               <Menubar Icon={<AccountBoxOutlinedIcon/>} text="Profile"/>
               <Menubar Icon={<LocalGroceryStoreOutlinedIcon/>} text="Store"/>

               <button className='sidebarButton'>Show More</button>
               <hr className='sidebarHr'/>

            <ul className='sidebarFriendList'>
                <div className='request'>
                <h1>Frined Request</h1>
                <h1 className='seeall'>See All</h1>
                </div>
               {/* {Users.map((user) => (<Friends user={user}/>))} */}
               <Friends/>
            </ul>
               
            </div>
        </div>
    );
};

export default Sidebar;
