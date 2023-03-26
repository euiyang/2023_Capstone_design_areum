import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/Profile.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Link to="/profile">pro </Link>
        <Link to="/">home </Link>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
