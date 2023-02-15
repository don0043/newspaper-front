import React, {useRef, useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const NewPost = () => {
    const [postValue, setPostValue] = useState('')
    return (
        <Container >
            <Box className="editor" mt="10%">
                <ReactQuill style={{height: `600px`}} theme="snow" value={postValue} onChange={setPostValue} />
                <Button variant="outlined">Add Post</Button>
            </Box>

        </Container>
    )

}

export default NewPost;
