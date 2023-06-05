
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/login/SignIn.js'
import SignUp from './pages/login/SignUp.js'
import Home from './pages/home/Home.js'
import Lab from './pages/Lab/Lab.js'
import Group from './pages/Group/Group.js'
import Study from './pages/Study/Study.js'
import MyPage from './pages/MyPage/MyPage.js'
import Post from './pages/Post/Post.js'

function App() {
  return (
    <div>
      <BrowserRouter>
      <hr/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/Lab" element={<Lab/>}/>
          <Route path="/Group" element={<Group/>}/>
          <Route path="/Study" element={<Study/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
          <Route path="/Post" element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
