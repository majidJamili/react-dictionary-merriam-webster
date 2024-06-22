import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Container, Button, Box, CssBaseline, Stack, TextField, InputLabel } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import '../wordItems.css';
import reactLogo from '../assets/MerriamWebsterLogo.png'
import googleLogo from '../assets/google.png'
import AppModal from '../components/AppModal' 
import LoginPage from './LoginPage';


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
const AboutSection = styled(Box)({
    background: 'white',

    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    textAlign: 'center',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <HeroSection>
        <Container>
          <Typography variant="h2" gutterBottom>
            Welcome to Lexicon Lab
          </Typography>
          <Typography variant="h5" gutterBottom>
            Elevate your English with engaging vocabulary lessons and writing practice tailored for learners of all levels.          </Typography>
          <Button variant="contained" color="secondary" sx={{background:'#D71921'}} onClick={navigateToLogin}>
            EXPLORE MORE
          </Button>
          <AppModal 
            modalName={'Explore More Modal'} 
            modalTitle={'Login'}
            modalContent={<BoxComponent
                            inputComponent={<InputComponent type="email" placeholder="E-mail" onChange={()=>{console.log("Email Changed")}} />}
                        
                         />
                        }

        >


          </AppModal>
          <AppModal 
            modalName={'Full Modal Login'} 
            modalTitle={'Login'}
            modalContent={ <LoginPage/> }

        ></AppModal>
          <Footer>
            <Stack sx={{display:'flex', flexDirection:'row', padding:'1rem', margin:'1rem'}}>
                <Box >
                    <a href="https://react.dev" target="_blank">
                            <img src={reactLogo}  alt="React logo"  className ="imageApp"/>
                    </a>
                </Box>
                <Box >
                    <a href="https://react.dev" target="_blank" >
                            <img src={googleLogo}  alt="React logo" className ="imageApp" />
                    </a>
                </Box>
            </Stack>
          </Footer>

              
        </Container>
      </HeroSection>
      <AboutSection style={{ marginTop: '2rem' }}>
        <Container>
            <Typography variant="h6" gutterBottom sx={{color:"#D71921"}}>
                About Us
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to Lexicon Lab, your dedicated partner in mastering the English language! At Lexicon Lab, 
                we provide interactive lessons and engaging exercises designed by language experts to enhance your vocabulary 
                and writing skills. 
                Our app caters to learners of all levels, helping you track your progress, 
                practice at your own pace, and achieve your language goals with confidence. 
                Whether you're preparing for exams, improving professional communication, or enriching 
                your language abilities, Lexicon Lab is here to support you every step of the way.
                Powered by the Merriam-Webster Dictionary and Google Authentication, 
                our app offers a robust platform for English learners. Explore an extensive vocabulary 
                database and authenticate seamlessly with Google to access personalized learning resources 
                and track your progress effortlessly.
            </Typography>
        </Container>
      </AboutSection>
      <Footer sx={{}}>
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} My Homepage. All rights reserved.
            </Typography>
      </Footer>
    </ThemeProvider>
  );
};

export default HomePage;
