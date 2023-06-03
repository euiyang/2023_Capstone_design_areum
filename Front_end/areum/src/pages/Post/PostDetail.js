import React, { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./Post.css";
import CustomHeader from "../../components/CustomHeader";

function PostDetail() {

return(
<div className='home'>
            <CustomHeader/>
<div class="header-content">
</div>

<div className="post-content post">
    <h2>title</h2>
    <p>body</p>
    </div>
    </div>

    );
}

export default PostDetail;
