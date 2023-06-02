import React, { useState,useEffect,useRef } from "react";
import axios from 'axios';
import "./Lab.css";
import CustomHeader from "../../components/CustomHeader";
import Contents from "../../components/Contents";
import { Link } from "react-router-dom";

function Lab() {

  const [posts,setPosts]=useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [name, setName] = useState("");
  const nameRef = useRef(); 
  const emailRef = useRef();
  const departmentRef = useRef();
  const gradeRef = useRef();
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setPhoto(reader.result);
      };
  
      reader.readAsDataURL(file);
    };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
  }e.preventDefault();

  // 이름 저장 로직
  // 예시로 name 상태로 저장한다고 가정
  const nameValue = nameRef.current.value;
  setName(nameValue);
};

    useEffect(()=>{
        fetchPageData();
      },[]);
    
      const fetchPageData= async()=>{
        try{
          const res=await axios.get('http://localhost:8080')
          
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
    <div className='lab'>
    <CustomHeader/>
    <div class="header-content">

    <div className="left-container">

<div className="container">
<div className="login-box">
<div className="profile">
  <div className="profile-info">
    <div className="profile-top">
      <div className="profile-circle">
        {photo && <img className="profile-photo" src={photo} alt="Profile" />}
      </div>
      <div className="name-container">
        <span>{name} 님 </span>
      </div>
    </div>
    <div className="department-grade-container">
      <p className="department-grade">학과 <span className="department-text">{departmentRef.current && departmentRef.current.value}</span></p>
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
                <h3>연구실 ㆍ LAB</h3>
                </div>
                <hr />
                
                <p>총 {posts.length} 개</p>              
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