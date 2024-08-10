

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // This function handles the redirection to the sign-up page
    const handleSignUpRedirect = () => {
        navigate('/signup'); // Make sure you have a route defined for '/signup'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            user_email: email,
            user_password: password,
        };

        try {
            const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const user = await response.json();

                // Check if the response contains the necessary information and status
                if (user && user.status === true) {
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/dashboard');
                    console.log('User logged in and stored in localStorage:', localStorage.getItem('user'));
                } else {
                    setError('Login failed: Invalid email or password.');
                }
            } else {
                setError('Login failed: Invalid email or password.');
            }
        } catch (error) {
            setError('Error during login: Please try again later.');
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="left-panel">
                <h1>Welcome to Login Page</h1>
                <p>Welcome back! We're excited to have you with us again. Please log in with your credentials to access your personalized dashboard. If you're new here, don't worry! You can easily create an account by clicking on the sign-up link below. Your journey towards a seamless experience starts with just a few clicks.</p>
            </div>
            <div className="right-panel">
                <form onSubmit={handleSubmit}>
                    <h2>Log in</h2>
                    <div className='full_name'>
                        <label htmlFor="email" required>Email<span className='require'>*</span> </label>
                        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='full_name'>
                        <label htmlFor="password" required>Password<span className='require'>*</span> </label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Log in</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <a href="/" onClick={handleSignUpRedirect} className="signin-link">SignUp</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
