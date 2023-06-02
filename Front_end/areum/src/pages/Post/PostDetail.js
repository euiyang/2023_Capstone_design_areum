import React, { useRef,useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./PostDetail.css";
import { FiHelpCircle } from 'react-icons/fi';
import CustomHeader from "../../components/CustomHeader";

function PostDetail() {
    
    const [posts,setPosts]=useState([]);

return(

<div className='home'>
            <CustomHeader/>
<div class="header-content">
</div>

<div className="post-content post">
      </div>
    </div>


    );
}

export default PostDetail;
