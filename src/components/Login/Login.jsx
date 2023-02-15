import React, {useState} from 'react';
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import Header from "../Header/Header";
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux";
import {fetchUserData} from "../../store/authSlice";

const Login = () => {

    const dispatch = useDispatch()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function tryAuth(){
        dispatch(fetchUserData())
    }


    return (
        <div>
            <Header/>
            <Box style={{padding: `30px 0 30px 0`, margin: `200px`}}>

                <Container fixed>
                    <Grid container>
                        <Grid item md={6} style={{display: `flex`}} sx={{flexDirection: 'column', margin: `auto`}}>
                            <Typography sx={{margin: `30px auto`, fontSize: `50px`}}>Please Log in</Typography>
                            <form onSubmit={() => tryAuth(email,password)}>
                                <TextField id="outlined-basic" label="email" variant="outlined"
                                           style={{marginBottom: `40px`}} onChange={(e) => setEmail(e.target.value)}/>
                                <TextField id="outlined-basic" type="password" label="password" variant="outlined"
                                           style={{marginBottom: `10px`}}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                <Button type="submit" variant="outlined" sx={{marginTop: `30px`}}>
                                    Log in
                                </Button>
                            </form>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Login;
