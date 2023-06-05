import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import './Study.css'
import CustomHeader from "../../components/CustomHeader";
import { Link } from "react-router-dom";


function Study() {

  const [posts,setPosts]=useState([]);
  const [searchText, setSearchText] = useState("");
  
  const user=JSON.parse(localStorage.getItem('user'));
  const userImg=localStorage.getItem("img");


    useEffect(()=>{
        fetchPageData();
      },[]);
    
      const fetchPageData= async()=>{
        try{
          const res=await axios.get('http://localhost:8080');
          setPosts(res.data);
        }catch(error){
            console.log(error);
        }
      };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className='study'>
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
            <div className="top-content">
              <div className="top-content-header">
                <h3>스터디 ㆍ STUDY</h3>
                </div>
                <hr />
                
                <p>총 {posts.length} 개</p>   
                <div className="container">
                <Link to="/Post">
                  <button className="write-button">글작성</button>
                </Link>           
              <hr className="content-divider" />
            </div>    
            </div>         

            <div className="contents">
              {posts.map((post) => (
                <Link to={'/PostDetail/${post.id}'} key={post.id} className="study-content">
                  <h4>{post.title}</h4>
                  <hr className="content-divider" />
                </Link>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;