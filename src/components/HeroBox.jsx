import { Box,Container,Typography  } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppModal from './AppModal';
import LoginPage from '../pages/LoginPage';


function HeroBox(){
    return(
        <Box
            sx={{
                background: 'white',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'grey',
                textAlign: 'center',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
            }}
        >
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
            </Container>
        </Box>

    )
}

export default HeroBox;