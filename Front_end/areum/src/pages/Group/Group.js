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
            <div className="top-content">
              <div className="top-content-header">
                <h2>동아리</h2>
                <hr />
                <p>총 12 개</p>
              </div>
              <hr className="content-divider" />
            </div>
            <div className="contents">
              <div className="group-content">
                <h4>게시글 제목 1</h4>
                <h8>게시글 내용 1</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 2</h4>
                <h8>게시글 내용 2</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 3</h4>
                <h8>게시글 내용 3</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 4</h4>
                <h8>게시글 내용 4</h8>
                <hr className="content-divider" />
              </div>
              <div className="group-content">
              <h4>게시글 제목 5</h4>
                <h8>게시글 내용 5</h8>
                <hr className="content-divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
