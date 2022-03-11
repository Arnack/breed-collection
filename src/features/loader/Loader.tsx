import React, {FC} from "react";
import styles from "./loader.module.scss"

export const Loader: FC = () => {
    return <div className={styles.spinner}>
        🐶
    </div>
}