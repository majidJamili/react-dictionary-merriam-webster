import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'user@example' && password=== 'pass') {
            navigateToHome();
        }else{
            alert('Invalid Credentials')
        }
    };
    const navigateToRegister = ()=>{
        navigate('/register');
    }
    const navigateToHome = () =>{
        navigate('/dashboard');
    }


    const handleSubmit = async(e)=>{
        try {
            // const response = await axios.post('/api/logi',{email, password}); 
            // localStorage.setItem('token', response.data.token); 
            // navigate('/dashboard');
            e.preventDefault();
            handleLogin();
            
        } catch (error) {
            console.log('Log-in Failed', error)
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
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