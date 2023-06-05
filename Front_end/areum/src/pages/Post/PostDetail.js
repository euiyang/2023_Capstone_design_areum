import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./Post.css";
import CustomHeader from "../../components/CustomHeader";
import { useParams } from "react-router";

const PostDetail=()=> {

    const {postId}=useParams();
    const [post,setPosts]=useState([]);

    useEffect(()=>{
        fetchPageData();
      },[]);

    const token=localStorage.getItem('token');
      const baseAxios=axios.create();
      baseAxios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    
      const fetchPageData= async()=>{
        try{
          const res=await baseAxios.get(`http://localhost:8080/board/${postId}`);
          setPosts(res.data);
        }catch(error){
            console.log(error);
        }
      };

      const handleApplyNow = () => {
        window.open('https://docs.google.com/forms/d/1eYJmxv8wXYbwBTA3xLJe_8FdXqjB7CNrgDOZr22xahM/edit', '_blank');
      };

    return(
        <div className='home'>
            <CustomHeader/>
        <div class="header-content">
        </div>

        <div className="post-content post">
            <h2>{post.pageName}</h2>
            <p>{post.pageBody}</p>
            <button onClick={handleApplyNow}>지원하기</button>
            </div>
        </div>

    );
}

export default PostDetail;
