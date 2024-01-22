import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';

function FooterComment({ onAddComment, selectedItem, textareaRef }) {
    const navigate = useNavigate();
    
    const handleTextareaChange = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    return (
        <div className="container-add-comment">
            <div className="div-add-comment">
                <textarea
                    ref={textareaRef}
                    className="text-add-comment"
                    onInput={handleTextareaChange}
                ></textarea>
            </div>
            <div className="div-button-add-comment">
                <button onClick={() => onAddComment(selectedItem)} className='round-button-item'>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default FooterComment;