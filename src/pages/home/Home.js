import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewsFeed from '../../components/Newsfeed/NewsFeed';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss'
const Home = () => {
    return (
        <div className='home'>
            <Navbar/>

            <div className='homecontainer'>
                <Sidebar/>
                <NewsFeed/>
                <RightSidebar/>
            </div>
        </div>
    );
};

export default Home;