import React from 'react';
import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import WordList from './WordList'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ListItem, Switch } from "@mui/material";


import LoginPage from './pages/LoginPage'; 
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

import { auth, signOut } from './pages/firebase';







function App() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
    } catch (error) {
      console.error(error);
      alert('Logout failed');
    }
  };
  const [count, setCount] = useState(0); 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>

    {/* Please code as you go */}

      {/* <Box
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
      </Box> */}
    </>
  )
}

export default App
