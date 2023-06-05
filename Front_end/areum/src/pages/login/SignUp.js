import axios from "axios"
import { useEffect, useRef, useState } from "react";
import './SignUp.css'
function SignUp(){

    const [id,setId]=useState("");
    const [pw,setPw]=useState("");
    const [pwRec,setPwRec]=useState("");
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [phoneNum,setPhoneNum]=useState("");
    const [dep,setDep]=useState("");

    const [answerId,setAnswerId]=useState("");
    const [answerPw,setAnswerPw]=useState("");
    const [answerCode,setAnswerCode]=useState("");

    const [checkId,setCheckId]=useState(false);
    const [checkPw,setCheckPw]=useState(false);
    const [checkEmail,setCheckEmail]=useState(false);
    const [emailState,setEmailState]=useState(false);
    const [cmpCode,setCmpCode]=useState("");
    const [code,setCode]=useState("");

    const isBlank=(value)=>{
        if(value.trim().length===0) return true;
        else return false;
    }

    const handleId=async(e)=>{
        //id 중복 확인
        e.preventDefault();
        if(!isBlank(id)){
            try{
                await axios
                .post("http://localhost:8080/signUp/check",null,{params:{
                    id:id
            }})
                .then((res)=>{//성공시 res로 값을 받아올 수 있음
                    console.log(res.data);
                    if(res.data=="1"){
                        setAnswerId("중복 ID 입니다. 다시 입력하세요");
                    }else{
                        setAnswerId("사용 가능한 ID 입니다");
                        setCheckId(true);
                    }
                })
            }catch(error){
                console.log(error);
            }
        }
    }

    useEffect(()=>{
        //중복 이후 id 수정이 있으면 다시 id 검증이 필요
        setAnswerId("");
        setCheckId(false);
    },[id]);

    useEffect(()=>{
        //비밀번호, 비밀번호 확인란 비교 검증
        if(isBlank(pw)){
            setAnswerPw("");
            setCheckPw(false);
        }else{
            if(pwRec===pw){
                setAnswerPw("비밀번호가 일치합니다");
                setCheckPw(true);
            }else if(pwRec!==pw){
                setAnswerPw("비밀번호가 일치하지 않습니다");
                setCheckPw(false);
            }
        }
    },[pwRec,pw]);

    const handleSignUp=async(e)=>{
        e.preventDefault();

        //이메일 인증, 아이디 중복 검증, 비밀 번호 검증, 빈칸 검증 확인
        if(checkId&&checkPw&&checkEmail){
            try{
                await axios
                .post("http://localhost:8080/signUp",null,{params:{
                    id:id,
                    pw:pw,
                    name:name,
                    email:email,
                    phone:phoneNum,
                    major:dep
            }})
            }catch(error){
                console.log(error);
            }
            alert("회원가입에 성공했습니다");
            document.location.href='/'
        }
    }

    const handleEmail=async(e)=>{
        e.preventDefault();
        const emailForm=new RegExp('[a-z0-9]+@dankook.ac.kr');
        if(emailForm.test(email)){
            //emailForm이 email 안에 존재하는지 판별
            try{
                await axios
                .post("http://localhost:8080/signUp/email",null,{params:{
                    email:email
            }})
                .then((res)=>{
                    setCmpCode(res.data);
                    setCheckEmail(true);
                })
            }catch(error){
                console.log(error);
            }
        }else{
            alert("이메일 형식이 맞지 않습니다 ex) @dankook.ac.kr");
            e.target.value="";
        }
    }

    const handleEmailValid=(e)=>{
        e.preventDefault();
        if(cmpCode==code){
            setAnswerCode("인증이 완료되었습니다");
            setCheckEmail(true);
            setEmailState(true);//email 수정 불가능하게
        }
    }
return (
  <div className='signUp'>
    <form>
        <h2>회원가입</h2>
      <li>
        <label htmlFor="id">아이디:</label>
        <input type="text" id="id" onChange={e => setId(e.target.value)} />
        </li>
        <button1 onClick={handleId}>아이디 중복 확인</button1>
      <li>{answerId}</li>

      <li>
        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" onChange={e => setPw(e.target.value)} />
      </li>
      <li>
        <label htmlFor="confirmPassword">비밀번호 확인:</label>
        <input type="password" id="confirmPassword" onChange={e => setPwRec(e.target.value)} />
      </li>
      <li>{answerPw}</li>

      <li>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          disabled={emailState}
          placeholder="@dankook.ac.kr"
        /> </li>
        <button1 onClick={handleEmail}>인증 번호 발송</button1>
      

      <li>
        <label htmlFor="code">인증번호:</label>
        <input type="text" id="code" onChange={e => setCode(e.target.value)} />
        </li>
        <button1 onClick={handleEmailValid}>확인</button1>
    
      <li>{answerCode}</li>

      <li>
        <label htmlFor="name">이름:</label>
        <input type="text" id="name" onChange={e => setName(e.target.value)} />
      </li>

      <li>
        <label htmlFor="phone">전화번호:</label>
        <input type="tel" id="phone" onChange={e => setPhoneNum(e.target.value)} />
      </li>

      <li>
        <label htmlFor="department">학과:</label>
        <input type="text" id="department" onChange={e => setDep(e.target.value)} />
      </li>

      <button onClick={handleSignUp}>회원가입</button>
    </form>
  </div>
);
}

export default SignUp;