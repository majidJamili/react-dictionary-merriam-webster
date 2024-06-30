import { AppBar, Toolbar,Grid, Typography,Link, Container,Card,CardContent, Button, Box, CssBaseline, Stack, TextField, InputLabel } from '@mui/material';


function Copyright() {
    return (
        <Typography>
        {'Copyright © '}
        <Link color="inherit" href="https://www.ie-studio.co/">
            Lexicon Lab
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
    }
  
export default Copyright;