import React from 'react';
import Header from "../Header/Header";
import {useEffect} from "react";
import {fetchPosts} from "../../store/postsSlice";
import {useDispatch} from "react-redux";
import PostsList from "../Post/PostsList";
import {Container} from "@mui/material";




const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

    return (
        <Container>
            <Header/>
            <PostsList/>
        </Container>
    );
};

export default Home;
