import React from 'react';
import style from './Header.module.css';

const Header = ({headText, leftChild, rightChild}) => {
    return (
        <header className={style.Header}>
               <div className="head_btn_left">{leftChild}</div>
               <div className="head_text">{headText}</div>
               <div className="head_btn_right">{rightChild}</div>
        </header>
    );
};

export default Header;