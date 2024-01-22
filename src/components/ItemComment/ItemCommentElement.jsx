import React from "react";
import './style.css'

function ItemCommentElement({ comment }) {

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    console.log('randomColor from params:', randomColor);

    const styles = {
        background: randomColor
    };

    return (
        <div className="comment-element">
            <div className="comment-action">
                <button className="div-comment-button" style={styles}></button>
            </div>
            <div className="comment-info">
                {comment.text}
            </div>
        </div>
    )
}

export default ItemCommentElement;
