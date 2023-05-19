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
  };

  return (
    <div className='group'>
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
