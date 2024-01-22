import React, { useState, useEffect, useTransition } from "react";
import { useNavigate } from 'react-router-dom';
import './style.css'
import ItemElement from "./ItemElement.jsx";

export default function ItemList({ items, setItems  }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleClickSelected = (id) => {
    setSelectedItem(selectedItem === id ? null : id); // Змінюємо стан при кліку
  };

  const handleDeleteItem = (itemId) => {
    startTransition(() => {
      setItems((prevItems) => {
        const updatedItems = prevItems.filter((item) => item.id !== itemId);
        localStorage.setItem('my_sayer_data', JSON.stringify(updatedItems));
        return updatedItems;
      });
    });
  };

  useEffect(() => {
    if (!isPending) {
    }
  }, [isPending]);

  const handleButtonClickAddComment = (id) => {
    startTransition(() => {
      navigate(`/add-comment/${id}`);
    });
  };

  const itemElements = items?.map((item) => (
    <div key={item.id}>
      <ItemElement
        item={item}
        isDelete={selectedItem === item.id}
        onClick={() => handleClickSelected(item.id)}
        handleButtonClickAddComment={() => handleButtonClickAddComment(item.id)}
        onDelete={() => handleDeleteItem(item.id)}
        isPending={isPending}
      />
    </div>
  ));
  return itemElements;
}

