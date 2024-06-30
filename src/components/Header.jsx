import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Header(){
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('./login')
    }
    const navigateToRegister = () =>{
        navigate('./register')
    }
    return(
        <AppBar position="static" sx={{background:'#00498F'}}>
            <Toolbar>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
                LEXICON LABORATORY
            </Typography>
            <Button color="inherit" variant="outlined" onClick={navigateToLogin} endIcon={<VpnKeyIcon/>}>Login</Button>
            <Button color="inherit" variant="outlined"  onClick={navigateToRegister} endIcon={<HowToRegIcon/>}>Register</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header; 