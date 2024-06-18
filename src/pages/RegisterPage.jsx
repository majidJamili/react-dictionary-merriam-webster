import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () =>{
        console.log('Registered: ', {email, password})
    }
    const navigateToLogin = () =>{
        navigate('/login')
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
            <form onSubmit={handleSubmit}>
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