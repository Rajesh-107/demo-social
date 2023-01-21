import React from 'react';
import RightSidebarHome from '../RightSideHome/RightSidebarHome';
import './RightSidebar.scss';

const RightSidebar = () => {
    return (
        <div className='rightside'>
            <div className='righrbarWraper'>
            <div className='request'>
                <h1>Add Your Feed </h1>
                <h1 className='seeall'>See All</h1>
                </div>
                <RightSidebarHome/>
            </div>
        </div>
    );
};

export default RightSidebar;