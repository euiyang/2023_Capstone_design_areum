import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./Lab.css";
import CustomHeader from "../../components/CustomHeader";
import Contents from "../../components/Contents";
import { Link } from "react-router-dom";

function Lab() {
  const [posts,setPosts]=useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

      const token=localStorage.getItem('token');
      const baseAxios=axios.create();
      baseAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`;

  useEffect(()=>{
    fetchPageData();
  },[]);

  const fetchPageData= async()=>{
    try{
      const res=await baseAxios.post('http://localhost:8080/lab')
      setPosts(res.data);
    }catch(error){
        console.log(error);
    }
  };

  return (
    <div className='lab'>
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
                <h2>연구실</h2>
                <hr />
                <p>{posts.length}</p>
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

export default Lab;