import React from "react";
import ItemCommentList from './ItemCommentList'

import './style.css'; 

function ItemComment({item}) {
    return (
                <ItemCommentList item={item} />
    )
}

export default ItemComment
