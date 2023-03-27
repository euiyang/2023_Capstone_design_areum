import { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/Profile.js'
import ProfileEdit from './pages/profile/ProfileEdit.js'
import Resume from './pages/profile/Resume.js'

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
      <ul>
        <li><Link to="/"> home </Link></li>
        <li><Link to="/profile"> User Profile </Link></li>
        <li><Link to="/profileEdit"> Profile Edit </Link></li>
        <li><Link to ="resume"> Resume </Link> </li>
      </ul>
      <hr/>
        <Routes>
          <Route path="/profile" element={<Profile user={user}/>}/>
          <Route path="/profileEdit" element={<ProfileEdit user={user} onSave={handleSave}/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
