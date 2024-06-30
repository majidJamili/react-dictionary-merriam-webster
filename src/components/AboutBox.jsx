import { Box,Card,CardContent,Container,Grid,Typography  } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppModal from './AppModal';
import LoginPage from '../pages/LoginPage';
import InfoIcon from '@mui/icons-material/Info';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';



function AboutBox(){
    
    return(
        <Box 
            sx={{
                background: 'white',
                height: '30vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'grey',
                textAlign: 'center',
                marginTop: '2rem', 
                padding:'2rem', 
                margin:'2rem',
            }}
        >
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
        </Box>
    )
}

export default AboutBox;