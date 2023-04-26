import { Link } from "react-router-dom";
import "./Group.css";

function Group() {
  return (
    <div className='group'>
            <div className="header">
            <Link to="/"><h1>Logo</h1></Link>
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
    <div class="header-content">
        <div className="left-container">
        <div className="login-box">로그인 박스</div>
        </div>
        <div className="right-container">
    <div className="search-bar">검색 바</div>
    <div className="content123">
        <h2>동아리</h2>
        <a href="/club" class="more-link">더보기</a>
        <hr className="content-divider" />
        <ul>
            <li><a href="/group/content-1">Content 1</a></li>
            <li><a href="/group/content-2">Content 2</a></li>
            <li><a href="/group/content-3">Content 3</a></li>
        </ul> 
    </div>
    </div>
    </div>
    </div>
  );
}

export default Group;
