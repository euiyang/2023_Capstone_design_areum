import axios from "axios";
import {useEffect, useState } from "react";
import { Link} from "react-router-dom";
import './SignIn.css'

function SignIn(){

    const [id,setId]=useState("");
    const [pw,setPw]=useState("");
    const [answer,setAnswer]=useState("");

    const isBlank=(value)=>{
        if(value.trim().length===0) return true;
        else return false;
    }

    const handleSignIn=async(e)=>{
        //id, pw 빈칸 검증
        e.preventDefault();
        if(!isBlank(id)&&!isBlank(pw)){
            try{
                await axios
                .post("http://localhost:8080/signIn",null,{params:{
                    id:id,
                    pw:pw,
            }})
                .then((res)=>{
                    if(res.data.name!=null){
                        const token=res.headers["Authorization"];
                        const user=JSON.stringify(res.data);
                        localStorage.setItem('token',token);
                        localStorage.setItem('user',user);
                        console.log(user);
                        alert("환영합니다");
                        document.location.href='/'
                    }else{
                        alert("아이디 또는 패스워드가 잘못되었습니다");
                    }
                })
            }catch(error){
                console.log(error);
            }
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