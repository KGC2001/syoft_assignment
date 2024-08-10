import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleTelChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validatePhone = () => {
        if (phone.length !== 10) {
            setPhoneError('Phone number must be exactly 10 digits long.');
        } else {
            setPhoneError('');
        }
    };
    const validateEmail = () => {
        if (!email.endsWith('@gmail.com')) {
            setEmailError('Email must end with @gmail.com');
        } else {
            setEmailError('');
        }
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            user_fullname: fullname,
            user_email: email,
            user_password: password,
            user_phone: phone
        };

        try {
            const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(userData));
                console.log('signup page'+userData)
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="left-panel">
                <h1>Welcome to our community</h1>
                <p>Fuse helps developers to build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
                <div className="profile-section">
                    <div className="profile-images">
                        <img src="https://imgs.search.brave.com/DhfwNvoEN1zDl9Ns9No9wqhK06i6q08MXstTyyLEMhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzk4LzY4LzUz/LzM2MF9GXzE5ODY4/NTM4MF9VaWlSMmxD/SGdnN3JhUjA1NER2/OXY1Y3VPWWRMQ0Vk/WC5qcGc" alt="Profile 1" className="profile-img" />
                        <img src="https://imgs.search.brave.com/JClGBpZdPWlH9HLBcJeBNO0yILrhVYQnd7x_F60xY6U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgwLzU0LzUz/LzM2MF9GXzU4MDU0/NTMwNl9sMUtsNVlE/cTBtTkJhRHFvdUd5/a1BpQlJtS2lzQ01s/RC5qcGc" alt="Profile 2" className="profile-img" />
                        <img src="https://imgs.search.brave.com/RwYnOosf1FqsXZAH4aW-Z3WTKDeTPNCXb7obV5Pu7V4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzc4LzQzLzI1/LzM2MF9GXzM3ODQz/MjUxNl82SWxLaUNM/REFxU0NHY2ZjNm84/VnFXaE5ENTFYcWZG/bS5qcGc" alt="Profile 3" className="profile-img" />
                        <img src="https://imgs.search.brave.com/2iBAoeqzbDV6lcIts9ZIHRwWUsHZAnQoKSqYjAUxsGE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzgzLzAxLzc2/LzM2MF9GXzY4MzAx/NzY5OF9CSk9JcThm/NXVheENnZGRiZlJv/MVdrY1BSRHBUdTZl/ci5qcGc" alt="Profile 4" className="profile-img" />
                    </div>
                    <p className="profile-text">More than 17k people joined us; it's your turn</p>
                </div>
            </div>
            <div className="right-panel">
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <div>
                        <label htmlFor="text" required>Full Name <span className='require'>*</span> </label>
                        <input type="text" placeholder="Full name"  value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                    </div>
                    <div >
                        <label htmlFor="email" required>Email<span className='require'>*</span> </label>
                        <input 
                            type="email" 
                            placeholder="Email address"
                            value={email} 
                            onChange={handleEmailChange} 
                            onBlur={validateEmail} // Validate on blur
                            required
                        />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                    <div >
                        <label htmlFor="email" required>Password<span className='require'>*</span> </label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="email" required >Phone Number<span className='require' >*</span> </label>
                        
                        <input 
                            type="text" 
                            placeholder="Phone number"
                            value={phone} 
                            onChange={handleTelChange} 
                            onBlur={validatePhone} // Validate on blur
                            required
                        />
                        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                    </div>
                    
                    <div className='terms_Policy'>
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
                    </div>
                    <button type="submit">Create your free account</button>
                    <p>Already have an account? <a href="/login" className="signin-link">Sign in</a></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
