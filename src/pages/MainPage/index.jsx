import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Item from '../../components/Item';
import './style.css'; 

const Mainpage = () => {
  return (
    <div className="my-bg-primary-subtle">
      <div className="container">
        <header className="header" >
          <Header>
            <div className='text-header-title'>Sayer</div>
            <div className='text-header'>World`s most used time waster</div>
          </Header>
        </header>
        <div className="content">
          <Item />         
        </div>
        <div>
           <footer className="footer"><Footer /></footer>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;