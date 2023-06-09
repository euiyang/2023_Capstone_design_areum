import React from "react";
import { Link } from "react-router-dom";
import { FiBell } from "react-icons/fi"; 
import "./CustomHeader.css"

const CustomHeader=()=> {

    const notificationCount = 2;

    const handleLogOut=()=>{
      localStorage.clear();
      document.location.href='/before'
    }

    return (
    <div className="header">
    <Link to="/"><img className="logo" alt="logo" src="/img/areumlogo.png" /></Link>
        <ui className="header-menu">
         <li><Link to="/Lab" className="menu-item"> 연구실 </Link></li>
         <li><Link to="/Group" className="menu-item"> 동아리 </Link></li>
         <li><Link to="/Study" className="menu-item"> 스터디 </Link></li>
        </ui>
      <div className="header-buttons">
          <Link to ="/MyPage">
          <button className="signin-btn">마이페이지</button>
          </Link>
          <button className="signup-btn" onClick={handleLogOut}>로그아웃</button>
        <div className="notification-wrapper">
          <div className="notification-icon">
          <Link to ="/SignIn" className="notification"><FiBell /> </Link>
          </div>
            {notificationCount > 0 && (
              <span className="notification-count">{notificationCount}</span>
            )}
        </div>
      </div>
    </div>
    );
};

export default CustomHeader;