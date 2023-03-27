import {useState,useRef} from "react";
import Select from "react-select";
function ProfileEdit({user,onSave}){

    const[name,setName]=useState(user.name);
    const[status,setStatus]=useState(user.status);
    const[num,setNum]=useState(user.studentNum);
    const[dep,setDep]=useState(user.department);
    const[email,setEmail]=useState(user.eMail);


    let statusOption=[
        {value:"none",label:"none"},
        {value:"searching", label: "searching"}];

    const updateData={
        ...user,
        name,
        status,
        num,
        dep,
        email
    }

    function handleSave(){
        onSave(updateData);
    }

    return (
        <div className='profileEdit'>
            <h1>수정 페이지</h1>
            <ul>
            <li>이름:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></li>
            <li>상태:<Select
                options={statusOption} 
                value={status} 
                onChange={(e)=>setStatus(e.target.value)}
                placeholder="선택하세요"/>
            </li>
            <li>학번:<input type="text" value={num} onChange={(e)=>setNum(e.target.value)}></input></li>
            <li>학과:<input type="text" value={dep} onChange={(e)=>setDep(e.target.value)}></input></li>
            <li>이메일:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input></li>
            </ul>
            <button onClick={handleSave}>send</button>
        </div>
    );
}

export default ProfileEdit;