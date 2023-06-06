import React from "react";

const LoginBox=()=> {

    const user=JSON.parse(localStorage.getItem('user'));
    const userImg=localStorage.getItem('img');

    return (
        <div className="profile">
        <div className="profile-info">
          <div className="profile-top">
            <div className="profile-circle">
              {userImg && <img className="profile-photo" src={userImg} alt="Profile" />}
            </div>
            <div className="name-container">
              <span>{user.name} 님 </span>
            </div>
          </div>
          <div className="department-grade-container">
            <p className="department-grade">
              <span className="department-text">
                학 과 <span className="department-text" style={{ marginLeft: '25px' }}>{user.major}</span>
              </span>
            </p>
          </div>
          <hr className="content-divider2" />
        </div>
      </div>
    );
        }
        
export default LoginBox;