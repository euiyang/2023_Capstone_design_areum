import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
        <div className='home'>
            <div className="header">
            <Link to="/"><h1>Logo</h1></Link>
                <ui className="header-menu">
                 <li><Link to="/Lab" style={{ textDecoration: "none" }}> 연구실 </Link></li>
                 <li><Link to="/Group" style={{ textDecoration: "none" }}> 동아리 </Link></li>
                 <li><Link to="/Study" style={{ textDecoration: "none" }}> 스터디 </Link></li>
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
    <div class="header-content">
        
        <div className="left-container">
        <div className="login-box">로그인 박스</div>
        </div>
        <div className="right-container">
    <div className="search-bar">검색 바</div>
    
    <div className="content123">
        <h4>[ 스터디 ] 같이 공부해요 </h4>
        <li><Link to="/study" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <ul>
            <li><a href="/study/content-1" style={{ textDecoration: "none" }}>Content 1</a></li> 
            <li><a href="/study/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/study/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

    <div className="content123">
        <h4>[ 연구실 ] 우리 학교 연구실 </h4>
        <li><Link to="/lab" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>        
        <hr className="content-divider" />
        <ul>
            <li><a href="/lab/content-1" style={{ textDecoration: "none" }}>Content 1</a></li>
            <li><a href="/lab/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/lab/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul>
    </div>

    <div className="content123">
        <h4>[ 동아리 ] 부원 모집 중 </h4>
        <li><Link to="/group" class="more-link" style={{ textDecoration: "none" }} > 더보기 </Link></li>
        <hr className="content-divider" />
        <ul>
            <li><a href="/group/content-1" style={{ textDecoration: "none" }}>Content 1</a></li>
            <li><a href="/group/content-2" style={{ textDecoration: "none" }}>Content 2</a></li>
            <li><a href="/group/content-3" style={{ textDecoration: "none" }}>Content 3</a></li>
        </ul> 
    </div>
</div>
    </div>
    </div>
          
    );
}

export default Home;

