function Profile(){
    return (
        <div className='profile'>
            <h1>student profile</h1>
            <ul>
                <li>{user.name}</li>
                <li>{user.status}</li>
                <li>{user.studentNum}</li>
                <li>{user.department}</li>
                <li>{user.eMail}</li>
            </ul>
        </div>
    );
}

export default Profile;