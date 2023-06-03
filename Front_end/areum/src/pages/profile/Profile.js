import React from 'react';

function Profile(){
    const storageUser=localStorage.getItem('user');
    const parsedUser=JSON.parse(storageUser);

    return (
        <div className='profile'>
            <br/>
            <h1>student profile</h1>
            <ul>

                <li>user Info</li>
                <li>{parsedUser.name}</li>
                <li>{parsedUser.phone}</li>
                <li>{parsedUser.major}</li>
                <li>{parsedUser.email}</li>
            </ul>
        </div>
    );
}

export default Profile;