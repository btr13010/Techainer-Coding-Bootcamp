import avt2 from "./asset/avt2.jpg";
import avt3 from "./asset/avt3.jpg";
import avt4 from "./asset/avt4.jpg";
import avt5 from "./asset/avt5.jpg";
import avt6 from "./asset/avt6.jpg";
import avt7 from "./asset/avt7.jpg";
import avt8 from "./asset/avt8.jpg";
import avt9 from "./asset/avt9.jpg";
import post_head from "./asset/icon/post_head.png";
import post from "./asset/icon/post.png";
import post_1 from "./asset/post1.jpg";
import post_2 from "./asset/post2.jpg";
import post_3 from "./asset/post3.jpg";
import post_4 from "./asset/post4.jpg";
import post_5 from "./asset/post5.jpg";
import save from "./asset/icon/save.png";
import comment from "./asset/icon/comment.png";

function Body() {
    return(
        <div class="feed">
            <div class="story_section">
                <div class="story">
                    <img src={avt2} alt="story_img" class="str_img"/>
                    <p>Person 1</p>
                </div>
                <div class="story">
                    <img src={avt3} alt="story_img" class="str_img"/>
                    <p>Person 2</p>
                </div>
                <div class="story">
                    <img src={avt4} alt="story_img" class="str_img"/>
                    <p>Person 3</p>
                </div>
            </div>
            <div class="post">
                <div class="post_head">
                    <img src={avt5} alt="Logo" class="logo"/>
                    <strong class="name">Techainer</strong>
                    <img src={post_head} alt="post head" class="dot"/>
                </div>
                <img src={post_1} alt="feed_img" class="post_img"/>
                <div class="like_section">
                    <img src={post} alt="post icon" class="like"/>
                    <img src={save} alt="save" class="save"/>
                </div>
                <strong class="count_like">500 likes</strong>
                <div class="content">
                    <p><strong>Techainer </strong>See it?</p>
                </div>
                <p class="age">2 days ago</p>
                <div class="comment">
                    <img src={comment} alt="comment" class="comment_icon"/>
                    <input placeholder="Add comment..." type="text" class="comment_text"/>
                    <button class="post_button">Post</button>
                </div>
            </div>
            <div class="post">
                <div class="post_head">
                    <img src={avt6} alt="Logo" class="logo"/>
                    <strong class="name">Techainer</strong>
                    <img src={post_head} alt="post head" class="dot"/>
                </div>
                <img src={post_2} alt="feed_img" class="post_img"/>
                <div class="like_section">
                    <img src={post} alt="post icon" class="like"/>
                    <img src={save} alt="save button" class="save"/>
                </div>
                <strong class="count_like">500 likes</strong>
                <div class="content">
                    <p><strong>Techainer </strong>See it?</p>
                </div>
                <p class="age">2 days ago</p>
                <div class="comment">
                    <img src={comment} alt="comment icon" class="comment_icon"/>
                    <input placeholder="Add comment..." type="text" class="comment_text"/>
                    <button class="post_button">Post</button>
                </div>
            </div>
            <div class="post">
                <div class="post_head">
                    <img src={avt7} alt="Logo" class="logo"/>
                    <strong class="name">Techainer</strong>
                    <img src={post_head} alt="post head" class="dot"/>
                </div>
                <img src={post_3} alt="feed_img" class="post_img"/>
                <div class="like_section">
                    <img src={post} alt="like" class="like"/>
                    <img src={save} alt="save icon" class="save"/>
                </div>
                <strong class="count_like">500 likes</strong>
                <div class="content">
                    <p><strong>Techainer </strong>See it?</p>
                </div>
                <p class="age">2 days ago</p>
                <div class="comment">
                    <img src={comment} alt="comment icon" class="comment_icon"/>
                    <input placeholder="Add comment..." type="text" class="comment_text"/>
                    <button class="post_button">Post</button>
                </div>
            </div>
            <div class="post">
                <div class="post_head">
                    <img src={avt8} alt="Logo" class="logo"/>
                    <strong class="name">Techainer</strong>
                    <img src={post_head} alt="post head" class="dot"/>
                </div>
                <img src={post_4} alt="feed_img" class="post_img"/>
                <div class="like_section">
                    <img src={post} alt="post icon" class="like"/>
                    <img src={save} alt="save icon" class="save"/>
                </div>
                <strong class="count_like">500 likes</strong>
                <div class="content">
                    <p><strong>Techainer </strong>See it?</p>
                </div>
                <p class="age">2 days ago</p>
                <div class="comment">
                    <img src={comment} alt="comment icon" class="comment_icon"/>
                    <input placeholder="Add comment..." type="text" class="comment_text"/>
                    <button class="post_button">Post</button>
                </div>
            </div>
            <div class="post">
                <div class="post_head">
                    <img src={avt9} alt="Logo" class="logo"/>
                    <strong class="name">Techainer</strong>
                    <img src={post_head} alt="post head" class="dot"/>
                </div>
                <img src={post_5} alt="feed_img" class="post_img"/>
                <div class="like_section">
                    <img src={post} alt="post icon" class="like"/>
                    <img src={save} alt="save icon" class="save"/>
                </div>
                <strong class="count_like">500 likes</strong>
                <div class="content">
                    <p><strong>Techainer </strong>See it?</p>
                </div>
                <p class="age">2 days ago</p>
                <div class="comment">
                    <img src={comment} alt="comment icon" class="comment_icon"/>
                    <input placeholder="Add comment..." type="text" class="comment_text"/>
                    <button class="post_button">Post</button>
                </div>
            </div>
        </div>
    );
}

export default Body;