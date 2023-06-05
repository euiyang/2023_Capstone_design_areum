import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import "./Home.css";

function Home2(){ 
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setPhoto(reader.result);
      };
  
      reader.readAsDataURL(file);
    };

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

    return (
        <div className='home'>
            <div className="header">
            <Link to="/"><img className="logo" alt="logo" src="/img/areumlogo.png" /></Link>
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
    <div class="header-content">

<div className="left-container">
<div className="login-box">
  <div className="profile">
    <div className="profile-circle"></div>
    <span>로그인하세요.</span>
  </div>
  <div className="login-button">
  <Link to ="/signIn">
    <button>로그인</button>
    </Link>
  </div>
</div>
</div>

        <div className="right-container">

        <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="# 모임 검색"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">검색</button>
          </form>

    
    <div className="content123">
        <h4>[ 스터디 ] 같이 공부해요 </h4>
        <li><Link to="/study" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <ul>
            <li><a href="/study/content-1" style={{ textDecoration: "none" }}>Content 1</a></li> 
            <li><a href="/study/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/study/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

    <div className="content123">
        <h4>[ 연구실 ] 우리 학교 연구실 </h4>
        <li><Link to="/lab" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>        
        <hr className="content-divider" />
        <ul>
            <li><a href="/lab/content-1" style={{ textDecoration: "none" }}>Content 1</a></li>
            <li><a href="/lab/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/lab/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

    <div className="content123">
        <h4>[ 동아리 ] 부원 모집 중 </h4>
        <li><Link to="/group" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <ul>
            <li><a href="/group/content-1" style={{ textDecoration: "none" }}>Content 1</a></li>
            <li><a href="/group/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/group/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul> 
    </div>
</div>
</div>
</div>
          
    );
}

export default Home2;

