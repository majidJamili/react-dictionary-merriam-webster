import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


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
            console.log('new user have been added', users)
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
        // e.preventDefault();
        try {
            // await axios.post('/api/register', {email, password}); 
            // alert('Registeration was successfull')
            e.preventDefault();
            handleRegister();

        } catch (error) {
            console.error('Registeration Failed', error)
            console.log('Registeration Failed', error)
        }
    }

    return(
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label> Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type='submit'>Register</button>
                <p onClick={navigateToLogin}> Already have an account? Login here, please.</p>
            </form>
        </div>
    )

}

export default RegisterPage;  