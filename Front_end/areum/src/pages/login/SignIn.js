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
                    
                    if(res.data.value==="success"){
                        //token
                    }else if(res.data.value==="idFail"){
                        alert("존재하지 않는 id입니다");
                    }else{
                        alert("잘못된 pw입니다.");
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
                <li>id:<input type="text" onChange={e=>setId(e.target.value)}></input></li>
                <li>password:<input type="password" onChange={e=>setPw(e.target.value)}></input></li>
                <li>{answer}</li>

                <button onClick={handleSignIn}>로그인</button>
            </form>
            <li><Link to ="/signUp"> 회원가입 </Link> </li>
        </div>
    );
}

export default SignIn;