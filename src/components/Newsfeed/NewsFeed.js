import React from 'react';
import ShareNews from '../Sharenews/ShareNews';
import './NewsFeed.scss';

const NewsFeed = () => {
    return (
        <div className='newsfeed'>
            <div className='newsfeedWrapper'>
                <ShareNews/>
            </div>
        </div>
    );
};

export default NewsFeed;