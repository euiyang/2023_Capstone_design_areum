import axios from "axios"
import React, { useRef, useState } from "react";
import "./MyPage.css";

import CustomHeader from "../../components/CustomHeader";

function MyPage() {
    const nameRef = useRef(); 
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [major,setMajor]=useState("");
    const [phone,setPhone]=useState("");

    const user=JSON.parse(localStorage.getItem('user'));
    const photo=localStorage.getItem("img");

    const token=localStorage.getItem('token');
    const baseAxios=axios.create();
    baseAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`;

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          localStorage.setItem('img',reader.result);
        };
    
        reader.readAsDataURL(file);
      };
  
    const handleSubmit = async(e) => {
      e.preventDefault();

      try{
        await baseAxios
        .get("http://localhost:8080/MyPage",null,{params:{
            id:user.id,
            name:name,
            email:email,
            major:major,
            phone:phone
      }})
      }catch(error){
          console.log(error);
      }
    }

    return (
        <div className='MyPage'>
        <CustomHeader/>

      <div className="mypage-content">
        <h1>마이페이지</h1>

        <div className="upload-photo">
          {photo && (
            <img className="uploaded-photo" src={photo} alt="Uploaded"/>
          )}
          {!photo && (
            <label htmlFor="photo-upload" className="upload-button">
              사진 업로드
              <input type="file" id="photo-upload" accept="image/*" onChange={handlePhotoUpload} />
            </label>
          )}
        </div>

        <form>
          <div className="input-section">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" value={user.name}
            onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="input-section">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" value={user.email}
            onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="input-section">
            <label htmlFor="department">학과</label>
            <input type="text" id="department" value={user.major}
            onChange={(e) => setMajor(e.target.value)}/>
          </div>

          <div className="input-section">
            <label htmlFor="phone">전화번호</label>
            <input type="text" id="phone" value={user.phone}
            onChange={(e) => setPhone(e.target.value)}/>
          </div>

          <button type="submit" className="save-button" onClick={handleSubmit}>
            변경 완료
          </button>
        </form>
      </div>
    </div>

    );

}

export default MyPage;
