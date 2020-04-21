import React from 'react'
import Search from '../search/Search';
import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <div className={styles["header__container"]}>
            <Search />
        </div>
    )
}
