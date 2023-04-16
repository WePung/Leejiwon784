import React from 'react';
import style from './Menu.module.css';

const Menu = ({leftChild, centerChild, rightChild}) => {
    return (
        <div className={style.Menu}>
            <ul>
            <div className="menuBtnLeft">{leftChild}</div>
               <div className="menuBtnCenter">{centerChild}</div>
               <div className="menuBtnRight">{rightChild}</div>
            </ul>
        </div>
    );
};

export default Menu;