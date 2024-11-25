import React from 'react';
import NavLinkComponent from "@/components/navLinkComponent/NavLinkComponent";
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
                <NavLinkComponent path={'/'}>Home</NavLinkComponent>
                <NavLinkComponent path={'/movies'}>Movies</NavLinkComponent>
                <NavLinkComponent path={'/genres'}>Genres</NavLinkComponent>
        </div>

    );
};

export default Header;