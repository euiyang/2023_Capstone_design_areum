
const AfterLoginHeader=()=>{
    return(
        <div className="header">
                <Link to="/"><img className="logo" alt="logo" src="img/areumlogo.png" /></Link>
                    <ui className="header-menu">
                    <li><Link to="/Lab" style={{ textDecoration: "none" }}> 연구실 </Link></li>
                    <li><Link to="/Group" style={{ textDecoration: "none" }}> 동아리 </Link></li>
                    <li><Link to="/Study" style={{ textDecoration: "none" }}> 스터디 </Link></li>
                    </ui>
            <div className="header-buttons">
                <Link to ="/MyPage">
                <button className="signin-btn">마이페이지</button>
                </Link>
                <Link to ="/signUp">
                <button className="signup-btn">로그아웃</button>
                </Link>
            </div>
        </div>

)}

export default AfterLoginHeader;