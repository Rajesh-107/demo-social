import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import ShareNews from '../Sharenews/ShareNews';
import './NewsFeed.scss';

const NewsFeed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('posts.json')
      .then(response => response.json())
      .then(data => setPosts(data));
    },[])

    
    return (
        <div className='newsfeed'>
            <div className='newsfeedWrapper'>
                <ShareNews/>
                {posts.map((post) =>(
                    <Post key={post.id} post={post}/>
                ))}
                
            </div>
        </div>
    );
};

export default NewsFeed;