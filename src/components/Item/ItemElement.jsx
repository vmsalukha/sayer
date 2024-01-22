import React, { useState } from "react";
import './style.css'

function ItemElement({ item, isDelete, onDelete, onClick, handleButtonClickAddComment, isPending }) {

    if (isDelete) {
        return (
            <div className="item-element">
                <div className="item-info"
                    onClick={onClick}
                    onDoubleClick={onClick}
                >
                    {item.text}
                </div>
                <div className="item-action">
                    <button className="app-div-button-del" onClick={onDelete}>
                        {isDelete ? 'Delete' : 'Комент'}
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="item-element">
                <div className="item-info" onClick={onClick} onDoubleClick={onClick}>
                    {item.text}
                </div>
                <div className="item-action-comment">
                    <button className="round-button-item" onClick={handleButtonClickAddComment} >
                        {item.comments ? item.comments.length : "0"}
                    </button>
                    {/* {isPending && <p>Loading...</p>} */}
                </div>
            </div>
        )
    }
}
export default ItemElement;