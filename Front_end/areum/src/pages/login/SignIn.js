import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import './SignIn.css'

function SignIn(){

    const idRef=useRef();
    const pwRef=useRef();

    const handleSignIn=async(e)=>{
        e.preventDefault();

        //id, pw 전송
        try{
            await axios
            .post("http://localhost:8080/login",{
                id:idRef.current.value,
                pw:pwRef.current.value,
            })
            .then((res)=>{//성공시 res로 값을 받음
                // if(res.data.id)
                //id, pw 실패시 어떤 값을 넣어 전송할지 정하기

                //token도 res.data.token으로 받을수 있음
            })
        }catch(error){
            console.log(error);
        }

    }


    return(
        <div className='signIn'>
            <form>
                <h2>로그인</h2>
                <li>아이디:  <input type="text" ref={idRef}></input></li>
                <li>비밀번호:<input type="password" ref={pwRef}></input></li>
                <button onClick={handleSignIn}>로그인</button>
            </form>
            <li><Link to ="/signUp"> 회원가입 </Link> </li>
        </div>
    );
}

export default SignIn;