import React, { useRef,useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./PostDetail.css";
import CustomHeader from "../../components/CustomHeader";

function PostDetail() {
  return (
    <div className='home'>
            <CustomHeader/> 
    <div>
      <h1>Post Detail</h1>
    </div>
    </div>
  );
}

export default PostDetail;
