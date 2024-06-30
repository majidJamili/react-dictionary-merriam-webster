import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Toolbar,Grid, Typography,Link, Container,Card,CardContent, Button, Box, CssBaseline, Stack, TextField, InputLabel } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import '../wordItems.css';
import reactLogo from '../assets/MerriamWebsterLogo.png'
import googleLogo from '../assets/google.png'
import AppModal from '../components/AppModal' 
import LoginPage from './LoginPage';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AppFooter from '../components/AppFooter';
import Header from '../components/Header';
import HeroBox from '../components/HeroBox';
import AboutBox from '../components/AboutBox';
import Copyright from '../components/Copyright';

const theme = createTheme();

const HeroSection = styled(Box)({
  background: 'white',
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'grey',
  textAlign: 'center',
  boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
});







const HomePage = () => {
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('./login')
    }
    const navigateToRegister = () =>{
        navigate('./register')
    }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Header/>
        <Box>
          <Grid container           sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}>
            <Grid item>
              <HeroBox/>
            </Grid>
            <Grid item>
              <AboutBox/>
            </Grid>
            <Grid item sx={{padding:'4rem'}}>
              <AppFooter/>
            </Grid>
            <Grid item sx={{width:'100%'}}>
              <Copyright></Copyright>
            </Grid>
          </Grid>
        </Box>
      </Container>      
    </ThemeProvider>
  );
};

export default HomePage;
