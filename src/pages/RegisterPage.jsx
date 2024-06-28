import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar,Avatar,Grid,Card,CardContent,Checkbox,CardActions,FormControlLabel, Toolbar, Typography, Container, Button, Box, CssBaseline, Stack, TextField, InputLabel, FormControl, Link } from '@mui/material';
import { auth, provider, signInWithPopup } from './firebase';
import GoogleIcon from '@mui/icons-material/Google';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import registerLogo from '../assets/form.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          
const defaultTheme = createTheme();


function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleRegister = () =>{
        console.log('Registered: ', {email, password})
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => {
            user.email === email
        }); 
        if (userExists) {
            alert('User already exists!')
        } else {
            users.push({email, password})
            localStorage.setItem('users', JSON.stringify(users)); 
            navigate('/dashboard')          
        }
    }
    const navigateToLogin = () =>{
        navigate('/login')
    }
    const navigateToDashboard = () =>{
        navigate('/dashboard')
    }
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            handleRegister();
        } catch (error) {
            console.error('Registeration Failed', error)
            console.log('Registeration Failed', error)
        }
    }
    return(        
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Card>
                    <CardContent>      
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                                    <HowToRegIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign up
                                </Typography>
                                <Box component="form" nonValidate onSubmit={handleRegister} sx={{mt:3}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <InputLabel htmlFor="EmailInput">Your Email Address</InputLabel>
                                            <TextField 
                                                required 
                                                type="email" 
                                                id="EmailInput" 
                                                label="Email" 
                                                variant="outlined"
                                                value={email}
                                                onChange={(e)=>setEmail(e.target.value)} 
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <InputLabel htmlFor="PasswordInput">Password</InputLabel>
                                            <TextField
                                                required
                                                type="password"
                                                label="Password"
                                                id="PasswordInput"
                                                variant="outlined"
                                                value={password}
                                                onChange={(e)=>setPassword(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox color="primary" />}
                                                label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid>
                                        <Button 
                                            type="submit"
                                            fullWidth
                                            variant="contained" 
                                            sx={{mt:3,mb:2}}
                                        >
                                            Register
                                        </Button>
                                        <Grid item xs>
                                            <Link onClick={navigateToLogin} component="button" variant="body2">
                                                Already have an account? Login here, please.
                                            </Link>
                                        </Grid>



                                    </Grid>

                                </Box>

                            </Box>
                        </Grid>   
                    </CardContent> 
                </Card>
                <Copyright sx={{mt:8,mb:4}}/>


            </Container> 
        </ThemeProvider>
    )

}
{/* <Container>
<Card>
    <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src={registerLogo}  alt="React logo" />

            </Grid>                  
            <Grid item xs={6}>
                <Typography variant="h4" component="h1" gutterBottom>
                    REGISTER
                </Typography>
                <form onSubmit={handleRegister}>
                    <Grid >
                        <Grid >
                            <InputLabel htmlFor="EmailInput">Your Email Address</InputLabel>
                            <TextField 
                                required 
                                type="email" 
                                id="EmailInput" 
                                label="Email" 
                                variant="outlined"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                            />
                        </Grid>
                        <Grid>
                            <InputLabel htmlFor="PasswordInput">Password</InputLabel>
                            <TextField
                                required
                                type="password"
                                id="PasswordInput"
                                variant="outlined"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>



                        <Button type="submit" variant="contained" color="success">Register</Button>


                


                    <p onClick={navigateToLogin}> Already have an account? Login here, please.</p>
                </form>
            </Grid>
        </Grid>
    </CardContent>
    <CardActions>
        <Link onChange={navigateToLogin}></Link>
    </CardActions>
    
</Card>
</Container>  */}

// <div>
// <label> Email</label>
// <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
// </div>
// <div>
// <label> Password</label>
// <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
// </div>
// <button type='submit'>Register</button>

export default RegisterPage;  