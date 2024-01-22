import React, { useTransition } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';

function Footer() {
    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();

    const handleButtonClick = () => {
        startTransition(() => {
            navigate('/new-item/');
        });
        // localStorage.clear();
    };

    return (
        <div className="div-button-add">
            <button onClick={handleButtonClick} className="round-button-add">
                <span>+</span>
            </button>
            {/* {isPending && <p>Loading...</p>} */}
        </div>
    )
}

export default Footer;

