import React, { useTransition, useEffect, useState, useRef  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import Header from '../../components/Header';
import ItemComment from '../../components/ItemComment';
import FooterComment from '../../components/FooterComment/index.jsx';
import { loadData } from '../../storage/storage.jsx'; 

const Addcomment = () => {

  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const textareaRef = useRef(null);

  const handleButtonClickOnTheMain = () => {
    startTransition(() => {
      navigate('/');
    });
  };

  useEffect(() => {
    console.log('ID from params:', id);
    const storedItems = loadData() || [];
    console.log('Stored Items:', storedItems);

    const foundItem = storedItems.find(item => item.id === id);
    console.log('Found Item:', foundItem);

    setSelectedItem(foundItem);
  }, [id]);

  const handleAddComment = () => {
    const textarea = textareaRef.current;
    console.log("Textarea value:", textarea.value);

    if (textarea) {
      const newComment = {
        id: uuidv4(),
        text: textarea.value,
      };

      const updatedItem = {
        ...selectedItem,
        comments: selectedItem.comments ? [...selectedItem.comments, newComment] : [newComment],
      };

      const storedItems = loadData() || [];
      const updatedItems = storedItems.map(existingItem => (existingItem.id === selectedItem.id ? updatedItem : existingItem));
      localStorage.setItem('my_sayer_data', JSON.stringify(updatedItems));

      textarea.value = '';
      textarea.style.height = 'auto';
      setSelectedItem(updatedItem);
    }
  };


  return (
    <div className="my-bg-primary-subtle">
      <div className="container">
        <header className="header">
          <Header>
            <div className='div-header-create-item'>
              <div>
                <button onClick={handleButtonClickOnTheMain} className='round-button-item'>
                  ←
                </button>
              </div>
              <div className='text-header-create my-text-truncate'>
                {selectedItem ? selectedItem.text : 'Item not found'}
              </div>
            </div>
          </Header>
        </header>
        <div className="content">
          <ItemComment
            item={selectedItem}
          />
        </div>
        <footer className="footer-comment">
          <FooterComment textareaRef={textareaRef} onAddComment={handleAddComment} selectedItem={selectedItem} />

        </footer>
      </div>
    </div>
  );
};

export default Addcomment;