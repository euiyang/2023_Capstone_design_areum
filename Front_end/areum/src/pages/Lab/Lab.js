import React, { useState,useEffect,useRef } from "react";
import axios from 'axios';
import "./Lab.css";
import CustomHeader from "../../components/CustomHeader";
import { Link } from "react-router-dom";
import LoginBox from "../../components/LoginBox";

function Lab() {

  const [posts,setPosts]=useState([]);
  const [searchText, setSearchText] = useState("");
  const [photo, setPhoto] = useState(null);

  const token=localStorage.getItem('token');
      const baseAxios=axios.create();
      baseAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`;

  const handlePhotoUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setPhoto(reader.result);
      };
  
      reader.readAsDataURL(file);
    };

    useEffect(()=>{
        fetchPageData();
      },[]);
    
      const fetchPageData= async()=>{
        try{
          const res=await baseAxios.get('http://localhost:8080/lab');
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
    <div className='lab'>
    <CustomHeader/>
    <div class="header-content">

    <div className="left-container">

<div className="container">
<div className="login-box">
<LoginBox/>

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
                <h3>연구실 ㆍ LAB</h3>
                </div>
                <hr />
                <p>총 {posts.length} 개</p>              
              <hr className="content-divider" />
            </div>
            
            <div className="lab-contents">
            {posts.map((page) => (
              <React.Fragment key={page.id}>
                <a href={`/PostDetail/${page.id}`} style={{ textDecoration: "none" }}>
                  {page.pageName}
                </a>
                <hr className="content-divider" />
              </React.Fragment>
            ))}
            </div>
            
          </div>
        </div>
      </div>
      </div>
  );
}

export default Lab;