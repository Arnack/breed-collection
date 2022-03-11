import React, {FC} from "react";
import styles from "./header.module.scss";
import {Link} from "react-router-dom";

export const Header: FC = () => {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <h1>Doggos 🐶</h1>
        </div>

        <nav className={styles.navigation}>
            <Link to="/collection">Collection</Link>
            <Link to="/explore">Explore</Link>
        </nav>

    </div>
}