import { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile.js'
import ProfileEdit from './pages/profile/ProfileEdit.js'
import Resume from './pages/profile/Resume.js'
import SignIn from './pages/login/SignIn.js'
import SignUp from './pages/login/SignUp.js'
import Home from './pages/home/Home.js'
import Lab from './pages/Lab/Lab.js'
import Group from './pages/Group/Group.js'
import Study from './pages/Study/Study.js'
import MyPage from './pages/MyPage/MyPage.js'

function App() {
  let [user,setUser]=useState({
    name:'yang',
    status:'none',
    studentNum:'32174114',
    department:'software',
    eMail:'euiyang2000@gmail.com'
  })

  const handleSave=(updateData)=>{
    setUser(updateData);
  }

  return (
    <div>
      <BrowserRouter>
      <hr/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/profile" element={<Profile user={user}/>}/>
          <Route path="/profileEdit" element={<ProfileEdit user={user} onSave={handleSave}/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/Lab" element={<Lab/>}/>
          <Route path="/Group" element={<Group/>}/>
          <Route path="/Study" element={<Study/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
