import { useRef } from "react";
import { Link } from "react-router-dom";
function SignIn(){

    const idRef=useRef();
    const pwRef=useRef();

    const handleSignIn=(e)=>{
        e.preventDefault();

        const updateId=idRef.current.value;
        const updatePw=pwRef.current.value;

        //id, pw 형식 확인

        //id, pw 전송

    }

    //navigation 구현부


    return(
        <div className='signIn'>
            <form>
                <li>id:<input type="text" ref={idRef}></input></li>
                <li>password:<input type="password" ref={pwRef}></input></li>
                <button onClick={handleSignIn}>로그인</button>
            </form>
            <li><Link to ="/signUp"> 회원가입 </Link> </li>
        </div>
    );
}

export default SignIn;