import React, { useState } from "react"
import classNames from "classnames/bind";
import styles from "./Review.module.scss"
import { FaStar } from "react-icons/fa";
import TextEditor from "src/component/EditorText/EditorText";
import PostArticle from "../../PostFanpage/components/PostArticle/PostArticle";


const cx = classNames.bind(styles);

export default function Review (){

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [content, setContent] = useState("");
    const [users, setUsers] = useState([]);
// setRating("3")
    return(
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h3>Review</h3>
                <div className={cx("review")}>
                    <div className={cx("user-infor")}>
                        <img src="
                        https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg
                        " alt="" />
                    </div>
                    <div className={cx("write-review")}>
                        <div className={cx("stars")}>
                            {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                              <label>
                                <input
                                  type="radio"
                                  name="rating"
                                  value={ratingValue}
                                  onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                  className={cx("start-icon")}
                                  size={30}
                                  color={
                                    ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                                  }
                                  onMouseEnter={() => setHover(ratingValue)}
                                  onMouseLeave={() => setHover(null)}
                                />
                              </label>
                            );
                            })}
                        </div>
                        <div className={cx("send")}>
                            <div className={cx("input-group")}>
                                <TextEditor setContentBlog={setContent} sHidderTools={true}
                                 />
                            </div>
                            {/* <input type="text" placeholder="Write your comment..." /> */}
                            <div className={cx("send-button")}>
                                <ion-icon name="send"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
                {/* comment */}
                <div className={cx("display-comments")}>
                    <div className={cx("line")}></div>
                    <h4>Rate & Comment fromm Customer</h4>
                    <div className={cx("comments")}>
                      <div className={cx("user-comment")}>
                        <div className={cx("user-infor")}>
                            <img src="
                            https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg
                            " alt="" />
                        </div>
                        <div className={cx("comment-group")}>
                            <div className={cx("head")}>
                                <h4>abc restaurant</h4>
                                <div className={cx("small-stars")}>
                                  {[...Array(5)].map((stars, index) => {
                                    return <FaStar size={10} color="#ffc107" />;
                                  })}
                                </div>
                            </div>
                            <div className={cx("comment-content")}>
                                comment
                            </div>
                        </div>
                      </div>
                      <div className={cx("user-comment")}>
                        <div className={cx("user-infor")}>
                            <img src="
                            https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg
                            " alt="" />
                        </div>
                        <div className={cx("comment-group")}>
                            <div className={cx("head")}>
                                <h4>abc restaurant</h4>
                                <div className={cx("small-stars")}>
                                  {[...Array(5)].map((stars, index) => {
                                    return <FaStar size={10} color="#ffc107" />;
                                  })}
                                </div>
                            </div>
                            <div className={cx("comment-content")}>
                                comment
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

        </div>
    )
}