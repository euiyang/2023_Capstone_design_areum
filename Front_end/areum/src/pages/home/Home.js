import { Link } from "react-router-dom";
function Home(){
    return (
        <div className='home'>
            <h1>Home</h1>
            <ul>
            <li><Link to="/"> home </Link></li>
            <li><Link to="/profile"> User Profile </Link></li>
            <li><Link to="/profileEdit"> Profile Edit </Link></li>
            <li><Link to ="resume"> Resume </Link> </li>
            <li><Link to="/signIn"> 로그인 </Link></li>
            </ul>
        </div>
    );
}

export default Home;