import axios from "axios"
import { useEffect,useRef, useState } from "react";
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
                .post("http://localhost:8080/signUp/id",{
                    id:id
                })
                .then((res)=>{//성공시 res로 값을 받아올 수 있음
                    if(res==="1"){
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
                .post("http://localhost:8080/signUp",{
                    id:id,
                    pw:pw,
                    name:name,
                    email:email,
                    phone:phoneNum,
                    major:dep
                })
            }catch(error){
                console.log(error);
            }
            alert("회원가입에 성공했습니다");
        }
    }

    const handleEmail=async(e)=>{
        e.preventDefault();
        const emailForm="@dankook.ac.kr";
        if(emailForm.test(email)){
            //emailForm이 email 안에 존재하는지 판별
            try{
                await axios
                .post("http://localhost:8080/signUp/email",{
                    email:email
                })
                .then((res)=>{
                    setCmpCode(res.data.value);
                })
            }catch(error){
                console.log(error);
            }
        }else{
            alert("이메일 형식이 맞지 않습니다 ex) @dankook.ac.kr");
            e.target.value="";
        }
    }

    // const handleEmailValid=async(e)=>{
    //     try{
    //         await axios
    //         .post("http://localhost:8080/signUp/email/valid",{
    //             code:code
    //         })
    //         .then((res)=>{
    //             if(res.data.value==="success"){
    //                 setAnswerCode("인증이 완료되었습니다");
    //                 setEmailState(true);
    //             }else{
    //                 setAnswerCode("잘못된 인증번호입니다")
    //             }
    //         })
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    const handleEmailValid=(e)=>{
        e.preventDefault();
        if(cmpCode===code){
            setAnswerCode("인증이 완료되었습니다");
            setEmailState(true);
        }
    }

    return(
        <div className='signUp'>
            <form>
                <li>
                    아이디:
                    <input type="text"onChange={e=>setId(e.target.value)}></input>
                    <button onClick={handleId}>아이디 중복 확인</button>
                </li>
                <li>{answerId}</li>

                <li>비밀번호:<input type="password" onChange={e=>setPw(e.target.value)} ></input></li>
                <li>비밀번호 확인:<input type="password" onChange={e=>setPwRec(e.target.value)}></input></li>
                <li>{answerPw}</li>

                <li>
                    이메일:
                    <input 
                        type="email" 
                        onChange={e=>setEmail(e.target.value)}
                        disabled={emailState}
                    ></input>
                    <button onClick={handleEmail}>인증 번호 발송</button>  
                </li>
                
                <li>
                    인증번호:
                    <input type="text" onChange={e=>setCode(e.target.value)}></input>
                    <button onClick={handleEmailValid}>확인</button>
                </li>
                <li>{answerCode}</li>

                <li>이름:<input type="text" onChange={e=>setName(e.target.value)}></input></li> 
                <li>전화번호:<input type="tel" onChange={e=>setPhoneNum(e.target.value)}></input></li>
                <li>학과:<input type="text" onChange={e=>setDep(e.target.value)}></input></li>

                <button onClick={handleSignUp}>로그인</button>
            </form>
        </div>
    );
}

export default SignUp;