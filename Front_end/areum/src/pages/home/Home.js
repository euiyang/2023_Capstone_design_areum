import React, { useRef,useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Home.css";
import CustomHeader from "../../components/CustomHeader";
import HomeContents from "../../components/HomeContents";

function Home(){

    const [labPosts,setLabPosts]=useState([]);
    const [clubPosts,setClubPosts]=useState([]);
    const user=JSON.parse(localStorage.getItem('user'));
    const userImg=localStorage.getItem('img');

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
        }catch(error){
            console.log(error);
        }
      };

    const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };
    return (
    <div className='home'>
            <CustomHeader/>
    <div class="header-content">

<div className="left-container">

<div className="container">
<div className="login-box">
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
          {user.major} 학과
        </span>
      </p>
    </div>
    <hr className="content-divider2" />
  </div>
</div>

  <div className="MP-button">
  <Link to ="/MyPage">
    <button>내정보수정</button>
    </Link>
  </div>
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
        <li><Link to="/study" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <ul>
            <li><a href="/study/content-1" style={{ textDecoration: "none" }}>Content 1</a></li> 
            <li><a href="/study/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/study/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

</div>
</div>
</div>
          
    );
}

export default Home;
