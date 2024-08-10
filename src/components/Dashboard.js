
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
        
//         if (storedUser && storedUser.user_data && storedUser.user_data.length > 0) {
//             setUser(storedUser.user_data[0]); // Access the first element of user_data array
//             console.log('Dashboard page:', storedUser.user_data[0]);
//         } else {
//             navigate('/login'); // Redirect to login if no user data is found
//         }
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         navigate('/login');
//     };

//     return (
//         <div className="dashboard-container">
//             <h2>Dashboard</h2>
//             {user ? (
//                 <div style={{ padding: '20px', color: 'red' }}>
//                     <h1>Welcome, {user.user_firstname} {user.user_lastname}!</h1>
//                     <p>Email: {user.user_email}</p>
//                     <p>Phone: {user.user_phone}</p>
//                     <p>City: {user.user_city}</p>
//                     <p>Zip Code: {user.user_zipcode}</p>
//                     <button onClick={handleLogout} className="btn">Logout</button>
//                 </div>
//             ) : (
//                 <p>No user information available</p>
//             )}
//         </div>
//     );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        
        if (storedUser && storedUser.user_data && storedUser.user_data.length > 0) {
            setUser(storedUser.user_data[0]); // Access the first element of user_data array
        } else {
            navigate('/login'); // Redirect to login if no user data is found
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2 className="animate-fade-in">Welcome to Your Dashboard</h2>
                <p className="animate-slide-in">This paragraph is intended to give users a clear understanding of what the dashboard is for and encourage them to explore its features.</p>
            </div>

            {user ? (
                <div className="user-info animate-zoom-in">
                    <h1>Welcome, {user.user_firstname} {user.user_lastname} ! </h1>
                    <p>Email: {user.user_email}</p>
                    <p>Phone: {user.user_phone}</p>
                    
                    <button onClick={handleLogout} className="btn animate-bounce">Logout</button>
                </div>
            ) : (
                <p className="animate-blink">No user information available</p>
            )}
        </div>
    );
};

export default Dashboard;
