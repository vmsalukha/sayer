import React, { useState, useTransition } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css'
import ItemCommentElement from "./ItemCommentElement.jsx";

export default function ItemCommentList({ item }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();

    const handleClickSelected = (id) => {
        setSelectedItem(selectedItem === id ? null : id); // Змінюємо стан при кліку
    };

    const handleButtonClickAddComment = (id) => {
        startTransition(() => {
            navigate(`/add-comment/${id}`);
        });
    };

    const itemCommentElements = item?.comments?.map(comment => (
        <div key={comment.id}>
            <ItemCommentElement
                comment={comment}
            />
        </div>
    ));

    return itemCommentElements;
}

