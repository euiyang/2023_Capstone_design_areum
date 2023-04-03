import { useRef } from "react";

function SignUp(){

    const idRef=useRef();
    const pwRef=useRef();
    const pwRecRef=useRef();
    const emailRef=useRef();
    const nameRef=useRef();
    const phoneNumRef=useRef();

    const isBlank=(value)=>{
        if(value.trim().length==0) return true;
        else return false;
    }

    const handleId=(e)=>{
        e.preventDefault();
        if(!isBlank(idRef.current.value)){
            //백엔드로 넘겨서 id 중복 확인
        }
    }

    const handlePw=(e)=>{
        e.preventDefault();

        if(!isBlank(pwRef.current.value)){
            if((pwRef.current.value!=pwRecRef.current.value)){
                alert("비밀번호 불일치");
            }else{
                alert("비밀번호 일치");
            }
        }else{
            alert("빈 값입니다.")
        }
        
    }

    const handleSignUp=(e)=>{
        e.preventDefault();

        //이메일 인증, 아이디 중복 검증, 비밀 번호 검증, 빈칸 검증 확인

        //json으로 데이터 전송
    }

    return(
        <div className='signUp'>
            <form>
                <li>아이디:<input type="text" ref={idRef}></input></li>
                <button onClick={handleId}>아이디 중복 확인</button>
                <li>비밀번호:<input type="password" ref={pwRef}></input></li>
                <li>비밀번호 확인:<input type="password" ref={pwRecRef}></input></li>
                <button onClick={handlePw}>비밀번호 중복 확인</button>
                <li>이메일:<input type="email" ref={emailRef}></input></li>
                <li>이름:<input type="text" ref={nameRef}></input></li> 
                <li>전화번호:<input type="tel" ref={phoneNumRef}></input></li>

                <button onClick={handleSignUp}>로그인</button>
            </form>
        </div>
    );
}

export default SignUp;