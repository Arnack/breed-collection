import React, {FC} from "react";
import styles from "./dogCart.module.scss"

interface IProps {
    breedName: string;
    breedImg: string;
    removeBreed: (breedName: string) => void;
}

export const DogCart: FC<IProps> = ({ breedName, breedImg, removeBreed }) => {

    return <div className="col-md-4">
        <div className={styles.cart}>
            <div>
                <img className={styles.breedTumb} src={breedImg} alt={breedName} />
            </div>
            <strong className={styles.breedName}>{breedName}</strong><br/>
            <button className="btn btn-outline-danger"
                    onClick={() => removeBreed(breedName)}
            >
                Remove
            </button>
        </div>
    </div>
}