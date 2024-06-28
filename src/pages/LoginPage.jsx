import React, { useState,useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
            Avatar,
            AppBar, 
            Toolbar,
            Grid,
            Typography, 
            Container, 
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

import {useAuth} from './useAuth';



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

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [remember, setRemember] = useState('');
    const {user, signOut, signIn} = useAuth();
    const navigate = useNavigate();    
    const handleData = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            remember: data.get('remember')
        })
    }
    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Successful Login')
            navigate('/dashboard')
        } else {
            alert('Invalid Credentials')
        }  
    };

    const handleGoogleLogin = async () =>{
        try {
            await signIn(); 
            navigate('/dashboard');
        } catch (error) {
            console.error(error)
            alert('Google Login Failed')
        }

    }

    const navigateToRegister = ()=>{
        navigate('/register');
    }
    const handleUser = async()=>{
        const userInfo = await user()
    }
    return(
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m:1,bgcolor:'success.main'}}>
                        <VpnKeyIcon />
                    </Avatar>
                
                    <Box component="form"  onSubmit={handleLogin}  sx={{mt:1}} >
                        <InputLabel htmlFor="EmailInput">
                            Your Email Address
                        </InputLabel>
                        <TextField margin="normal" required type="email" id="EmailInput" label="Email" variant="outlined" value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete='email' autoFocus/>
                        <InputLabel htmlFor="PasswordInput">
                            Password
                        </InputLabel>
                        <TextField margin="normal" required type="password" id="PasswordInput" label="Password" value={password} variant="outlined" onChange={(e)=> setPassword(e.target.value)} autoComplete='current-password' autoFocus/>
                        
                        <Grid>
                            <FormControlLabel 
                                control={<Checkbox value={remember} color='primary'/>} 
                                label="Remember"
                                id="remember"

                            />
                            <Button type="submit" variant="contained" color="success">Login</Button>

                        </Grid>
                        <Grid>
                            <Button variant="outlined" startIcon={<GoogleIcon />} onClick={handleGoogleLogin}>
                                Login with Google
                            </Button>
                        </Grid>
                        <Grid 
                            container
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item xs>
                                <Link href="#" variant='body2'>
                                    Forgot Password?
                                </Link>
                            </Grid>
                            <Grid item xs>
                                <Link onClick={navigateToRegister} component="button" variant="body2">
                                    Don't have an account? Register here.
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>                    
                    
                </Box>
                <Copyright sx={{mt:8,mb:4}}/>
            </Container>
        </ThemeProvider>
    )
}
export default LoginPage; 

