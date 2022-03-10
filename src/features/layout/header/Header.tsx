import React, {FC} from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <h1>Doggos 🐶</h1>
        </div>

        <div className={styles.navigation}>
            <span>
                Collection
            </span>
            <span>
                Explore
            </span>
        </div>

    </div>
}