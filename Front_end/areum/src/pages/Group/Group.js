
import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./Group.css";
import CustomHeader from "../../components/CustomHeader";
import Contents from "../../components/Contents";

function Group() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetchPageData();
  },[]);

  const fetchPageData= async()=>{
    try{
      const res=await axios.get('http://localhost:8080/club')
      setPosts(res.data);
    }catch(error){
        console.log(error);
    }
    
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className='group'>
    <CustomHeader/>            
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
            <div className="top-content">
              <div className="top-content-header">
                <h2>동아리</h2>
                <hr />
                <p>총 12 개</p>
              </div>
              <hr className="content-divider" />
            </div>

            <Contents posts={posts}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;