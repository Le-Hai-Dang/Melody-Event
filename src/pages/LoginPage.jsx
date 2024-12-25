import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../components/Auth';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        if (Auth.authenticate(username, password)) {
            history.push('/admin');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;