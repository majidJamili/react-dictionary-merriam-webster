import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';
import { auth,signOut, provider, signInWithPopup } from './firebase';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import WordList from '../WordList'
import Navbar from '../Navbar';
import LoginPage from './LoginPage'; 
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuth} from './useAuth';
import AvatarChipsApp from '../components/AvatarChipsApp';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
            Avatar,
            AppBar, 
            Toolbar,
            Grid,
            Typography, 
            Container, 
            CssBaseline,
            Button, 
            Box, 
            Stack, 
            TextField, 
            InputLabel, 
            FormControl, 
            Link, 
            FormControlLabel, 
            Checkbox

        } from '@mui/material';




const theme = createTheme();

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.ie-studio.co/">
            Lexicon Lab
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
    }
function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const {user, signOut} = useAuth();

  const { data } = location.state || {};
  console.log("Data to deliver", location.state)

  const navigateToLogin = () =>{
    navigate('/login')
  }
  const navigateToRegister = () =>{
      navigate('/register')
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Logout failed');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

        <AppBar position="static" sx={{background:'#00498F'}}>
          <Toolbar>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              LEXICON LABORATORY
            </Typography>
            <Avatar alt="Remy Sharp" src={user ? user.providerData[0].photoURL: ""} />

            {user ? <AvatarChipsApp label={user.displayName} source={user ? user.providerData[0]: ""} />:<Typography>NO USER DATA AVA</Typography>}
            <Button color="inherit" variant='contaiened' onClick={handleLogout} endIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
        <Box
          sx={{
            display:"felx",
            justifyContent:"center",
            backgroundColor:"lightblue", 
            flexDirection:"column",
            alignItems:"center", 
            m:"3"
        }}
        >
                


        <WordList/>
      </Box>

        </Container>
        <Copyright sx={{mt:8,mb:4}}/>
    </ThemeProvider>
  );
}

export default Dashboard;

