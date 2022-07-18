import insta from "./asset/icon/insta.png";
import head from "./asset/icon/head.png";
import avt1 from "./asset/avt1.jpg";

function Header() {
    return (
        <header className="header_section">
            <img src={insta} alt="insta_logo" class="insta"/>
            <input placeholder="Search" type="text" class="search"/>
            <img src={head} alt="head_icon" class="head_icon"/>
            <img src={avt1} alt="avatar" class="avt"/>
        </header>
    );
}

export default Header;