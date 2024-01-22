import React, { useState, useEffect } from "react";
import ItemList from './ItemList';
import { loadData } from '../../storage/storage.jsx'; 

import './style.css'; 

function Item() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const loadedItems = loadData() || [];
    setItems(loadedItems);
    console.log("--- ItemStorage: ", loadedItems)
  }, []);
  
  return <ItemList 
    items={items} 
    setItems={setItems} 
  />;
}

export default Item;