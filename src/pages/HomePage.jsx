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


const theme = createTheme();

const HeroSection = styled(Box)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  background: 'white',

  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'grey',
  textAlign: 'center',
  boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
});

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
const AboutSection = styled(Box)({
    background: 'white',

    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    textAlign: 'center',
})
const Footer = styled(Box)({
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    textAlign: 'center',
    
  
});


const InputComponent = ({type,placeholder, onChange})=>(
    <div>
        <InputLabel htmlFor="outlined-basic">
          {placeholder}
        </InputLabel>
        <TextField required type={type} id="outlined-basic" label={placeholder} placeholder={placeholder} variant="outlined" onChange={onChange} />
    </div>



)
const BoxComponent = ({inputComponent}) =>(
    <Box>
        {inputComponent}
    </Box>
)




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
      <CssBaseline />
      <AppBar position="static" sx={{background:'#00498F'}}>
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            LEXICON LABORATORY
          </Typography>
          <Button color="inherit" variant="outlined" onClick={navigateToLogin} endIcon={<VpnKeyIcon/>}>Login</Button>
          <Button color="inherit" variant="outlined"  onClick={navigateToRegister} endIcon={<HowToRegIcon/>}>Register</Button>
        </Toolbar>
      </AppBar>
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Lexicon Lab
          </Typography>
          <Typography variant="h5" gutterBottom>
            Elevate your English with engaging vocabulary lessons and writing practice tailored for learners of all levels.          </Typography>

          <AppModal 
                modalName={'Explore More'} 
                modalTitle={'Login'}
                modalContent={ <LoginPage/> }
                sx={{background:'#D71921'}}

            >                
            </AppModal>



            {/* <Stack sx={{display:'flex', flexDirection:'row', padding:'1rem', margin:'1rem'}}>
                <Box >
                    <a href="https://www.merriam-webster.com/" target="_blank">
                            <img src={reactLogo}  alt="React logo"  className ="imageApp"/>
                    </a>
                </Box>
                <Box >
                    <a href="https://www.google.com/" target="_blank" >
                            <img src={googleLogo}  alt="React logo" className ="imageApp" />
                    </a>
                </Box>
            </Stack> */}

              
        </Container>
      </HeroSection>
      <AboutSection style={{ marginTop: '2rem', padding:'2rem', margin:'2rem'}}>
        <Container 
          sx={{
            marginTop:8,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}
        >
          <Typography variant="h6" gutterBottom >
               ABOUT LEXICON LAB
          </Typography>
          <Grid 
            container
            sx={{
              marginTop:'2rem',
              gap:'1rem',
                           
              display:'flex',
              flexDirection:'row',
              alignItems:'center'
            }}
          >
            
            <Grid item xs>
              <Card sx={{ display:"felx",flexDirection:'column',padding:'.25rem',height: 270 }}>
                <CardContent>
                  <InfoIcon></InfoIcon>
                  <Typography>
                    
                    Welcome to Lexicon Lab, your dedicated partner in mastering the English language! At Lexicon Lab, 
                    we provide interactive lessons and engaging exercises designed by language experts to enhance your vocabulary 
                    and writing skills. 
                    
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs>
              <Card sx={{ display:"felx",flexDirection:'column',padding:'.25rem',height: 270 }}>
                <CardContent>
                <SportsScoreIcon/>
                  <Typography>
                    Our app caters to learners of all levels, helping you track your progress, 
                    practice at your own pace, and achieve your language goals with confidence. 
                    Whether you're preparing for exams, improving professional communication, or enriching 
                    your language abilities.
                    
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
            <Grid item xs>
              <Card sx={{ display:"felx",flexDirection:'column',padding:'.25rem',height: 270 }}>
                <CardContent>
                <AutoStoriesIcon/>
                  <Typography>
                    Powered by the Merriam-Webster Dictionary and Google Authentication, our app offers a robust platform for English learners.
                    Explore an extensive vocabulary database and authenticate seamlessly with Google to access personalized learning resources 
                    and track your progress effortlessly.
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

          </Grid>


        </Container>
      </AboutSection>
      <Footer sx={{}}>
        <Copyright sx={{mt:8,mb:4}}/>
      </Footer>
    </ThemeProvider>
  );
};

export default HomePage;
