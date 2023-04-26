import React from "react"
import classNames from "classnames/bind";
import styles from "./Review.module.scss"

const cx = classNames.bind(styles);

export default function Review (){

    return(
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h3>Review</h3>
                <div className={cx("review")}>
                    <div className={cx("userInfor")}>
                        <img src="
                        https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg
                        " alt="" />
                    </div>
                    <div className={cx("writeReview")}>
                        <div className={cx("stars")}>
                            Star
                        </div>
                        <div className={cx("send")}>
                            <input type="text" placeholder="Write your comment..." />
                            <div className={cx("sendButton")}>
                                <ion-icon name="send"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
                {/* comment */}
                <div className={cx("commented")}>
                    <div className={cx("comments")}>
                        <div className={cx("userInfor")}>
                            <img src="
                            https://screenrant.com/wp-content/uploads/2017/04/Guardians-of-the-Galaxy-Milano-Concept-Art.jpg
                            " alt="" />
                        </div>
                        <div className={cx("boxComment")}>
                            <div className={cx("headComment")}>
                                <h4>abc restaurant</h4>
                                <div className={cx("starsRated")}>
                                    Star
                                </div>
                            </div>
                            <div className={cx("commentContent")}>
                                comment
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}