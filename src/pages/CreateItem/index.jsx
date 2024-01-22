import React, { useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { saveData, loadData } from '../../storage/storage.jsx';

const Createitem = () => {

  const navigate = useNavigate();
  const [newItem, setNewItem] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleButtonClickOnTheMain = () => {
    startTransition(() => {
      navigate('/');
    });
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };


  const handleSaveData = () => {
    const existingItems = loadData() || [];
    
    const newItemObject = {
      id: uuidv4(),
      text: newItem.trim(),
      comments: []  
    };
   
    existingItems.push(newItemObject);
    saveData(existingItems);
    setNewItem('');

    startTransition(() => {
      navigate('/');
    });
  };

  return (
    <div className="my-bg-primary-subtle">
      <div className="container">
        <header className="header" >
          <Header>
            <div className='div-header-create-item'>
              <div>
                <button onClick={handleButtonClickOnTheMain} className='round-button-item'>
                  ←
                </button>
                {/* {isPending && <p>Loading...</p>} */}
              </div>
              <div className='text-header-create'>
                Create new item
              </div>
            </div>
          </Header>
        </header>
        <div className="container-create-item">
          <div className="div-create-item">
            <input
              type="text"
              rows="4"
              className="text-create-item"
              value={newItem}
              onChange={handleInputChange}
            />
          </div>
          <div className="div-button-create-item">
            <button onClick={handleSaveData} className='round-button-item'>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createitem;