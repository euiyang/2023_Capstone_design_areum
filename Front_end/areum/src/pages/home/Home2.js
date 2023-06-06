import { Link } from "react-router-dom";

import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeContents from "../../components/HomeContents";

function Home2(){ 
  const [photo, setPhoto] = useState(null);
  const [labPosts,setLabPosts]=useState([]);
  const [clubPosts,setClubPosts]=useState([]);
  const [studyPosts,setStudyPosts]=useState([]);

      useEffect(()=>{
        fetchPageData();
      },[])

      const token=localStorage.getItem('token');
      const baseAxios=axios.create();
      baseAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    
      const fetchPageData= async()=>{
        try{
          const lRes=await baseAxios.get('http://localhost:8080/lab/home')     
          setLabPosts(lRes.data);
          const cRes=await baseAxios.get('http://localhost:8080/club/home')    
          setClubPosts(cRes.data); 
          const sRes=await baseAxios.get('http://localhost:8080/study/home')    
          setStudyPosts(sRes.data); 
        }catch(error){
            console.log(error);
        }
      };

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
    <div className="profile-circle" style={{ marginLeft: '-10px' }}></div>
    <span style={{ marginLeft: '10px' }}>로그인하세요.</span>
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
        <h3>[ 연구실 ] 우리 학교 연구실 </h3>
        <li><Link to="/lab" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>        
        <hr className="content-divider" />
        <HomeContents posts={labPosts}/>
    </div>

    <div className="content123">
        <h3>[ 동아리 ] 부원 모집 중 </h3>
        <li><Link to="/group" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <HomeContents posts={clubPosts}/>
    </div>
    
    <div className="content123">
        <h3>[ 스터디 ] 같이 공부해요 </h3>
        <li><Link to="/group" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <HomeContents posts={studyPosts}/>
    </div>
</div>
</div>
</div>
          
    );
}

export default Home2;

