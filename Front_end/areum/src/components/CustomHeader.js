import React from "react";
import { Link } from "react-router-dom";


const CustomHeader=()=> {
    return (
    <div className="header">
    <Link to="/"><img className="logo" alt="logo" src="img/areumlogo.png" /></Link>
        <ui className="header-menu">
         <li><Link to="/Lab" className="menu-item"> 연구실 </Link></li>
         <li><Link to="/Group" className="menu-item"> 동아리 </Link></li>
         <li><Link to="/Study" className="menu-item"> 스터디 </Link></li>
        </ui>
      <div className="header-buttons">
          <Link to ="/signIn">
          <button className="signin-btn">로그인</button>
          </Link>
          <Link to ="/signUp">
          <button className="signup-btn">회원가입</button>
          </Link>
      </div>
    </div>
    );
};

export default CustomHeader;