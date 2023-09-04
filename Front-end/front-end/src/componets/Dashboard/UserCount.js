import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCountComponent = () => {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        axios.get('/api/Auth/userCount')
            .then(response => {
                setUserCount(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching user count:', error);
            });
    }, []);

    return (
        <div className="user-count-container">
            <h2 className='usercount'>Users Count: {userCount}</h2>
        </div>
    );
};

export default UserCountComponent;
