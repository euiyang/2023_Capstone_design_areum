import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./Lab.css";
import CustomHeader from "../../components/CustomHeader";
import Contents from "../../components/Contents";

function Lab() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetchPageData();
  },[]);

  const fetchPageData= async()=>{
    try{
      const res=await axios.get('http://localhost:8080/lab')
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
        <div className="login-box">로그인 박스</div>
        </div>
        <div className="right-container">
          <div className="search-bar">검색 바</div>
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