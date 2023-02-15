import React from 'react';
import Post from "./Post";
import {useSelector} from "react-redux";

const PostsList = () => {

    const posts = useSelector(state => state.posts.posts)

    console.log(posts)

    return (
        <div>
            {posts.map((post) => <Post title={post.title} text={post.text} user={post.user} />)}
        </div>
    );
};

export default PostsList;
