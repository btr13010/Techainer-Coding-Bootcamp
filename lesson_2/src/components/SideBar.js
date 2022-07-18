import avt_1 from "./asset/avt1.jpg";
import avt_2 from "./asset/avt2.jpg";
import avt_3 from "./asset/avt3.jpg";
import avt_4 from "./asset/avt4.jpg";
import avt_5 from "./asset/avt5.jpg";
import avt_6 from "./asset/avt6.jpg";

function SideBar() {
    return (
        <div class="addition">
            <div class="add_blank"></div>
            <div class="add">
                <div class="add_header">
                    <img src={avt_1} alt="avatar" class="avt_add"/>
                    <div class="add_text">
                        <strong class="id_add">_name_</strong>
                        <p class="name_add">My Name</p>
                    </div>
                    <button class="switch_button">Switch</button>
                </div>
                <div class="suggest_section">
                    <p class="suggestion">Suggestion</p>
                    <p class="see">See all</p>
                </div>
                <div class="suggest_item">
                    <img src={avt_2} alt="avt" class="suggest_avt"/>
                    <div class="suggest_text">
                        <strong>name_1</strong>
                        <p class="info">Followed by other users</p>
                    </div>
                    <button class="follow_button">Follow</button>
                </div>
                <div class="suggest_item">
                    <img src={avt_3} alt="avt" class="suggest_avt"/>
                    <div class="suggest_text">
                        <strong>name_2</strong>
                        <p class="info">Followed by other users</p>
                    </div>
                    <button class="follow_button">Follow</button>
                </div>
                <div class="suggest_item">
                    <img src={avt_4} alt="avt" class="suggest_avt"/>
                    <div class="suggest_text">
                        <strong>name_3</strong>
                        <p class="info">Followed by other users</p>
                    </div>
                    <button class="follow_button">Follow</button>
                </div>
                <div class="suggest_item">
                    <img src={avt_5} alt="avt" class="suggest_avt"/>
                    <div class="suggest_text">
                        <strong>name_4</strong>
                        <p class="info">Followed by other users</p>
                    </div>
                    <button class="follow_button">Follow</button>
                </div>
                <div class="suggest_item">
                    <img src={avt_6} alt="avt" class="suggest_avt"/>
                    <div class="suggest_text">
                        <strong>name_5</strong>
                        <p class="info">Followed by other users</p>
                    </div>
                    <button class="follow_button">Follow</button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;