import React from "react";
import { Link } from "react-router-dom";


const CustomHeader=()=> {
    return (
    <div className="header">
    <Link to="/"><h1>Logo</h1></Link>
        <ui className="header-menu">
         <li><Link to="/Lab"> 연구실 </Link></li>
         <li><Link to="/Group"> 동아리 </Link></li>
         <li><Link to="/Study"> 스터디 </Link></li>
        </ui>
      <div className="header-buttons">
          <Link to ="signIn">
          <button className="signin-btn">로그인</button>
          </Link>
          <Link to ="signUp">
          <button className="signup-btn">회원가입</button>
          </Link>
      </div>
    </div>
    );
};

export default CustomHeader;