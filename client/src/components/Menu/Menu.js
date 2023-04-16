import React from 'react';
import style from './Menu.module.css';

const Menu = () => {
    return (
        <div className={style.Menu}>
            <ul>
                <li><a href="/ranking">학교 랭킹</a></li>
                <li><a href="/schoollist">학교</a></li>
                <li><a href="/promotion">홍보 자료</a></li>
            </ul>
        </div>
    );
};

export default Menu;