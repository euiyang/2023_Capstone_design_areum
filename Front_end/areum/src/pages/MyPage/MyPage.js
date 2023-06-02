import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import "./MyPage.css";
import CustomHeader from "../../components/CustomHeader";

function MyPage() {
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

    return (
        <div className='MyPage'>
        <CustomHeader/>

      <div className="mypage-content">
        <h1>마이페이지</h1>

        <div className="upload-photo">
  {photo && (
    <img className="uploaded-photo" src={photo} alt="Uploaded" />
  )}
  {!photo && (
    <label htmlFor="photo-upload" className="upload-button">
      사진 업로드
      <input type="file" id="photo-upload" accept="image/*" onChange={handlePhotoUpload} />
    </label>
  )}
</div>

        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" ref={nameRef} />
          </div>

          <div className="input-section">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" ref={emailRef} />
          </div>

          <div className="input-section">
            <label htmlFor="department">학과</label>
            <input type="text" id="department" ref={departmentRef} />
          </div>

          <div className="input-section">
            <label htmlFor="grade">학년</label>
            <input type="text" id="grade" ref={gradeRef} />
          </div>

          <div className="password-section">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="password-section">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          {!isPasswordMatch && (
            <p className="error-message">비밀번호가 일치하지 않습니다.</p>
          )}

          <button type="submit" className="save-button">
            변경 완료
          </button>
        </form>
      </div>
    </div>

    );

}

export default MyPage;
