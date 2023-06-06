import axios from "axios";
import React, { useState } from "react";
import { FiHelpCircle } from 'react-icons/fi';
import "./Post.css";
import CustomHeader from "../../components/CustomHeader";

function Post(){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [hashtags, setHashtags] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [showTooltip, setShowTooltip] = useState(false); //툴팁

    const token=localStorage.getItem('token');
      const baseAxios=axios.create();
      baseAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    
    const handleHashtagChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleHashtagKeyPress = (e) => {
        if (e.key === "Enter" || e.key === ",") {
          e.preventDefault();
          const newHashtag = inputValue.trim();
          if (newHashtag !== "" && hashtags.length < 3 && !hashtags.includes(newHashtag)) {
            setHashtags([...hashtags, newHashtag]);
          }
          setInputValue("");
        }
      };

      const removeHashtag = (hashtag) => {
        const updatedHashtags = hashtags.filter((tag) => tag !== hashtag);
        setHashtags(updatedHashtags);
      };

    const handleSubmit = async(e) => {
      e.preventDefault();
      
      try{
        await baseAxios
        .post("http://localhost:8080/study/post",null,{params:{
            title:title,
            content:content
    }})
    }catch(error){
        console.log(error);
    }
    document.location.href='/Study';
    };
  
    //툴팁
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
      };

return(

<div className='home'>
            <CustomHeader/>
<div class="header-content">
</div>

<div className="post-content post">
        <h2>게시글 작성</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <div>
          <div className="hashtag-description">
            <label htmlFor="hashtags">해시태그</label>
            <span className="question-mark-icon" onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
              <FiHelpCircle />
            </span>              
              <div className={`tooltip ${showTooltip ? 'show' : ''}`}>
                , 혹은 enter 시 3개까지 해시태그 추가가 가능합니다
              </div>
            </div>

            <input
              type="text"
              id="hashtags"
              value={inputValue}
              onChange={handleHashtagChange}
              onKeyPress={handleHashtagKeyPress}
            />
          </div>
          <div>
          <label htmlFor="hashtags">선택된 해시태그</label>
            <div className="selected-hashtags">
              {hashtags.map((hashtag) => (
                <div key={hashtag} className="hashtag-block">
                  #{hashtag} 
                  <button className="remove-hashtag"
                    onClick={() => removeHashtag(hashtag)}>
                    X </button>
                </div>
              ))}
            </div>
          </div>
          
          <button type="submit">게시</button>
        </form>
      </div>
    </div>


    );

}

export default Post;