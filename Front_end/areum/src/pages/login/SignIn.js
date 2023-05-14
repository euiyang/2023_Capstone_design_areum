import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SignIn.css'

function SignIn(){

    const [id,setId]=useState("");
    const [pw,setPw]=useState("");
    const [answer,setAnswer]=useState("");

    const isBlank=(value)=>{
        if(value.trim().length==0) return true;
        else return false;
    }

    const handleSignIn=async(e)=>{
        //id, pw 빈칸 검증
        e.preventDefault();
        if(!isBlank(id)&&!isBlank(pw)){
            try{
                await axios
                .post("http://localhost:8080/signIn",{
                    id:id,
                    pw:pw,
                })
                .then((res)=>{
                    
                    if(res.data.value==="fail"){
                        alert("id 또는 pw가 잘못되었습니다");
                    }else {
                        alert("환영합니다");
                        //token and user object
                    }
                })
            }catch(error){
                console.log(error);
            }
            alert("환영합니다");
        }
    }

    useEffect(()=>{
        if(isBlank(id)||isBlank(pw)) {
            setAnswer("빈 칸을 채워주세요");
        }else{
            setAnswer("");
        }
    },[id,pw]);


    return(
        <div className='signIn'>
            <form>
                <h2>로그인</h2>
                <li>아이디:<input type="text" onChange={e=>setId(e.target.value)}></input></li>
                <li>비밀번호:<input type="password" onChange={e=>setPw(e.target.value)}></input></li>
                <li>{answer}</li>
                <button onClick={handleSignIn}>로그인</button>
            </form>
            <li><Link to ="/signUp"> 회원가입 </Link> </li>
        </div>
    );
}

export default SignIn;