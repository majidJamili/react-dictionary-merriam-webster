import { useState } from 'react'
import reactLogo from './assets/MerriamWebsterLogo.svg'

import './App.css'
import TodoList from './TodoList'
import '@fontsource/roboto/300.css';
import TodoForm from './TodoForm'; 
import WordFetcher from './WordFetcher'; 
import WordList from './WordList'
import websterLogo from './assets/MerriamWebsterLogo.svg';
import WebsterIcon from './WebsterIcon';
import Navbar from './Navbar';
import { Box, Typography } from "@mui/material";


function App() {
  const [count, setCount] = useState(0); 
  return (
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
        <Navbar/>
        <WordList/>
      </Box>
  )
}

export default App
