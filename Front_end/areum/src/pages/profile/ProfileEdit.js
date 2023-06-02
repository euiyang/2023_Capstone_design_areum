import {useContext, useState} from "react";
import Select from "react-select";

function ProfileEdit(){
    const user=localStorage.getItem(user);

    const[name,setName]=useState(user.name);
    const[status,setStatus]=useState(user.status);
    const[studentNum,setStudentNum]=useState(user.studentNum);
    const[department,setDepartment]=useState(user.department);
    const[eMail,setEMail]=useState(user.eMail);


    let statusOption=[
        {value:"none",label:"none"},
        {value:"searching", label: "searching"}];

    const updateData={
        ...user,
        name,
        status,
        studentNum,
        department,
        eMail
    }

    const handleSave=(e)=>{
        e.preventDefault();
        //axios 통신으로 update 구현
    }

    return (
        <div className='profileEdit'>
            <h1>수정 페이지</h1>
            <ul>
            <li>이름:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></li>
            <li>상태:<Select
                options={statusOption} 
                value={{value: status, label:status}} 
                onChange={(selectedOption)=>setStatus(selectedOption.value)}
                placeholder="선택하세요"/>
            </li>
            <li>학번:<input type="text" value={studentNum} onChange={(e)=>setStudentNum(e.target.value)}></input></li>
            <li>학과:<input type="text" value={department} onChange={(e)=>setDepartment(e.target.value)}></input></li>
            <li>이메일:<input type="text" value={eMail} onChange={(e)=>setEMail(e.target.value)}></input></li>
            </ul>
            <button onClick={handleSave}>send</button>
        </div>
    );

}

export default ProfileEdit;