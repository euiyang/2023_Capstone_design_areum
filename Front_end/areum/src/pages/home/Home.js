import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
        <div className='home'>
            <div className="header">
                <hi>Logo</hi>
                <ui className="header-menu">
                 <li><Link to="/Lab"> 연구실 </Link></li>
                 <li><Link to="/Group"> 동아리 </Link></li>
                 <li><Link to="/Study"> 스터디 </Link></li>
                </ui>
        <div className="header-buttons">
            <Link to ="signIn">
            <button className="signin-btn">로그인</button>
            </Link>
            <Link to ="signUp">
            <button className="signup-btn">회원가입</button>
            </Link>
        </div>
    </div>
    <div className="main-container">
        <div className="left-container">
          <div className="login-box">로그인 박스</div>
        </div>
    </div>
    <div className="right-container">
            <div className="search-bar">검색 바</div>
        <div className="study-content">
                <h2>스터디</h2>
                <ul>
                 <li>Content 1</li>
                 <li>Content 2</li>
                 <li>Content 3</li>
                </ul>
        </div>
        <div className="lab-content">
                <h2>연구실</h2>
                <ul>
                 <li>Content 1</li>
                 <li>Content 2</li>
                 <li>Content 3</li>
                </ul>
        </div>
        <div className="group-content">
                <h2>동아리</h2>
                <ul>
                 <li>Content 1</li>
                 <li>Content 2</li>
                 <li>Content 3</li>
                </ul>
        </div>
    </div>
    </div>
          
    );
}

export default Home;