import React from 'react';
import './Header.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {
    return (
        <div className="header">
            <Link to="/"><Button><HomeIcon/></Button></Link>
            <div className="header__buttons">
                <Link to="/login"><Button variant="outlined">Login</Button></Link>
                <Button variant="outlined">Register</Button>
            </div>

        </div>
    );
};

export default Header;
