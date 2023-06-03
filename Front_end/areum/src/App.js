
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile.js'
import ProfileEdit from './pages/profile/ProfileEdit.js'
import Resume from './pages/profile/Resume.js'
import SignIn from './pages/login/SignIn.js'
import SignUp from './pages/login/SignUp.js'
import Home from './pages/home/Home.js'
import Home2 from './pages/home/Home2.js'
import Lab from './pages/Lab/Lab.js'
import Group from './pages/Group/Group.js'
import Study from './pages/Study/Study.js'
import MyPage from './pages/MyPage/MyPage.js'
import Post from './pages/Post/Post.js'
import PostDetail from './pages/Post/PostDetail.js'

function App() {
  return (
    <div>
      <BrowserRouter>
      <hr/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Home2"element={<Home2/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profileEdit" element={<ProfileEdit/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/Lab" element={<Lab/>}/>
          <Route path="/Group" element={<Group/>}/>
          <Route path="/Study" element={<Study/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/PostDetail/:postId" element={<PostDetail />} />

        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
