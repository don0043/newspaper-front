import React from 'react';
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";

const Post = ({title,text,user}) => {
    const nick = user.nickName
    return (
        <div >
            <Paper elevation={24} style={{padding: `30px 0 30px 0`}}>

                <Container fixed >
                    <Grid container >
                        <Grid item md={12}>
                            <Typography variant="h4">{title}</Typography>
                            <Typography color="black" gutterBottom>
                                опубликовал: {nick}
                            </Typography>
                            <Box style={{margin:`10px 0 30px 0`}} component="img" sx={{
                                    height: 733,
                                    width: 1100,
                                    maxHeight: { md: 1167 },
                                    maxWidth: { md: 1150 },
                                }}
                                alt="The house from the offer."
                                 src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Beautiful-High-Quality-Backgrounds-Free-Download.jpg"
                            />

                            <Typography component="h5" paragraph color="black">
                                {text}
                            </Typography>
                            <Button variant="outlined" style={{marginBottom: `30px`}}>
                                Learn more
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    );
};

export default Post;
