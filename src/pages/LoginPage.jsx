import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

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
    const navigateToRegister = ()=>{
        navigate('/register');
    }





    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label >E-mail</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>                    
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>                    
                </div>
                <button type='submit'>Login</button>
                <p onClick={navigateToRegister}>Don't have an account? Register here.</p>
   
            </form>
        </div>
    )
}
export default LoginPage; 