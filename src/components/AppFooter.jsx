import React from 'react';
import {Box,Container,Grid, Typography, Link} from '@mui/material';

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
function AppFooter(){
    return(
        <Box
            sx={{
                backgroundColor: 'black',
                color:'white',
                padding: '40px 0', 
                marginTop: 'auto'
            }}
        >
            <Container>
                <Grid container spacing={1} height={200}>
                    <Grid item xs={12} sm={5} md={3}>
                        <Typography variant="h6" gutterBottom>
                            LexIcon Labratory & IE-Studio
                        </Typography>
                                      
                        <Typography variant='body1'>
                            Contact us at: <Link href="mailto:direct@ie-studio.co">direct@ie-studio.co</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                        <Typography variant="h6" gutterBottom>
                            Located in Brisbane, Queensland, Australia
                        </Typography>
                        <Box
                            component="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099067!2d144.95373631531595!3d-37.817209979751704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772cabc1b0c4e9!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1572850991660!5m2!1sen!2sau"
                            width="600"
                            height="600"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Our Team
                        </Typography>
                        <Typography variant='body1'>
                            We are a group of young web developers 
                            working on small practical web apps targeting small and 
                            medium-sized companies.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
} 
export default AppFooter; 
