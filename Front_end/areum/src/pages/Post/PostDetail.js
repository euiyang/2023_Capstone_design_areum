import React, { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./Post.css";
import CustomHeader from "../../components/CustomHeader";

function PostDetail() {
    
    const { postId } = useParams(); // URL에서 postId 가져오기
    const [post, setPost] = useState(null);
  
    useEffect(() => {
      fetchPostData();
    }, []);
  
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!post) {
        return <div>Loading...</div>;
      }

return(
<div className='home'>
            <CustomHeader/>
<div class="header-content">
</div>

<div className="post-content post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </div>
    </div>
    );
}

export default PostDetail;
