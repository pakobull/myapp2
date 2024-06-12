import React, { useState } from 'react';
import apiService from '../services/apiService';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await apiService.register(username, password);
            console.log(response); // Handle successful registration
        } catch (error) {
            console.error(error); // Handle registration error
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
