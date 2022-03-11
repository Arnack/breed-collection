import React, {FC, useEffect, useState} from "react";
import styles from "./selectedBreed.module.scss";
import axios from "axios";
import {LocalCollectionStore} from "../../../store/breedStore/localCollectionStore";
import {Loader} from "../../loader/Loader";
import {imagePlaceholder, REACT_APP_SINGLE_BREED_URL} from "../../../model/constants";

interface IProps {
    breedName: string;
}

export const SelectedBreed: FC<IProps> = ({breedName}) => {
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isInCollection, setIsInCollection] = useState(LocalCollectionStore.isInCollection(breedName));

    const addToCollection = () => {
        LocalCollectionStore.addItem({ breedName, image: image || "null" });
        setIsInCollection(true);
    }
    const removeFromCollection = () => {
        LocalCollectionStore.removeItem(breedName);
        setIsInCollection(false);
    }

    const fetchImage = () => {
        setIsLoading(true);
        axios.get(`${REACT_APP_SINGLE_BREED_URL}${breedName}/images/random`)
            .then((res) => {
                setImage(res.data.message);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        setIsInCollection(LocalCollectionStore.isInCollection(breedName));
        fetchImage();
    }, [breedName]);

    if (isLoading) {
        return <Loader />
    }

    return <div>
        <div className="row justify-content-center">
            {
                image &&
                <div key={image} className={"col-md-auto"}>
                    {isInCollection ?
                        <>
                            <span>The breed is in your collection</span><br/>
                            <button className="btn btn-outline-danger"
                                    onClick={removeFromCollection}
                            >× Remove from collection
                            </button>
                        </> :
                        <>
                        <button className="btn btn-outline-secondary"
                                onClick={fetchImage}
                        >× Another Image
                        </button>
                        <button className="btn btn-primary"
                                onClick={addToCollection}
                        >
                            + Add to Collection
                        </button>
                    </>
                    }
                    <div>
                        <img className={styles.breedTumb} src={image || imagePlaceholder} alt={breedName}/>
                    </div>
                </div>
            }
        </div>
    </div>
}
