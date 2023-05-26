import React, { useRef,useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Home.css";
import CustomHeader from "../../components/CustomHeader";

function Home(){

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
    e.preventDefault();

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
  }

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
    <div className='home'>

            <CustomHeader/>
    <div class="header-content">
        
    {/* **로그인 전!**
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
</div> */}

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
      <p className="department-grade">학년 <span className="department-text">{gradeRef.current && gradeRef.current.value}</span></p>
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
        <h3>[ 스터디 ] 같이 공부해요 </h3>
        <li><Link to="/study" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <ul>
            <li><a href="/study/content-1" style={{ textDecoration: "none" }}>Content 1</a></li> 
            <li><a href="/study/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/study/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

    <div className="content123">
        <h3>[ 연구실 ] 우리 학교 연구실 </h3>
        <li><Link to="/lab" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>        
        <hr className="content-divider" />
        <ul>
            <li><a href="/lab/content-1" style={{ textDecoration: "none" }}>Content 1</a></li>
            <li><a href="/lab/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/lab/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

    <div className="content123">
        <h3>[ 동아리 ] 부원 모집 중 </h3>
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

export default Home;
