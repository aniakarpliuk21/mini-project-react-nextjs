import React from 'react';
import styles from './Menu.module.css'
import Header from "@/components/header/Header";
import UserInfo from "@/components/userInfo/UserInfo";

const Menu = () => {
    return (
                <div className={styles.menu}>
                    <span>Flix.id</span>
                    <Header/>
                    <UserInfo/>
                </div>
    );
};

export default Menu;