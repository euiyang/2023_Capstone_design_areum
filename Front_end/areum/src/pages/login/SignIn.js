import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function SignIn(){

    const [id,setId]=useState("");
    const [pw,setPw]=useState("");

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
                .then((res)=>{//성공시 res로 값을 받음
                    
                    //token도 res.data.token으로 받을수 있음
                    //session storage 기억
                })
            }catch(error){
                console.log(error);
            }
        }
    }


    return(
        <div className='signIn'>
            <form>
                <li>id:<input type="text" onChange={e=>setId(e.target.value)}></input></li>
                <li>password:<input type="password" onChange={e=>setPw(e.target.value)}></input></li>
                <button onClick={handleSignIn}>로그인</button>
            </form>
            <li><Link to ="/signUp"> 회원가입 </Link> </li>
        </div>
    );
}

export default SignIn;