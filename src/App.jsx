import React from 'react';
import './App.css'
import '@fontsource/roboto/300.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Avatar,Typography } from "@mui/material";
import LoginPage from './pages/LoginPage'; 
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import { useAuth } from './pages/useAuth';
import AvatarChipsApp from './components/AvatarChipsApp'







function App() {
  const {user} = useAuth()
  return (
    <Box>
      {/* <Box sx={{display:'flex', flexDirection:'row'}}>
      <Avatar alt="Remy Sharp" src={user ? user.providerData[0].photoURL: ""} />
          {user ? 
                <AvatarChipsApp label={user.displayName} source={user ? user.providerData[0]: ""} /> 
                :
                <AvatarChipsApp label={"Please Login"} source={user ? user.providerData[0]: ""} />
          }

      </Box> */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </Box>
  )
}

export default App
