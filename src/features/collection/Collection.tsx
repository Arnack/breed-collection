import React, {FC, useState} from "react";
import {LocalCollectionStore} from "../../store/breedStore/localCollectionStore";
import {imagePlaceholder} from "../../model/constants";
import {DogCart} from "./cart/DogCart";
import {Link} from "react-router-dom";
import styles from "./collection.module.scss"
import {RandomBreed} from "./randomBreed/RandomBreed";
import {Loader} from "../loader/Loader";

export const Collection: FC = () => {
    const [collection, setCollection] = useState(Object.entries(LocalCollectionStore.getCollection()));
    const [isLoading, setLoading] = useState(false);

    const handleRemoveBreed = (breedName: string) => {
        setCollection(Object.entries(LocalCollectionStore.removeItem(breedName)));
    }

    const handleAddNewBreed = (breedName: string, image: string) => {
        setCollection(Object.entries(LocalCollectionStore.addItem({breedName, image})));
    }

    if (isLoading) {
        return <div className={styles.empty}>
                    <h3>Updating...</h3>
                    <Loader />
                </div>
    }

    if (collection.length === 0) {
        return <div className={styles.empty}>
                   <h3>Your Collection is Empty</h3>
                   <Link to={"/explore"}>Explore dog breeds and add some to your collection &gt;&gt;</Link>
                   <p>Or add a random breed</p>
                   <RandomBreed updateLoadingStatus={setLoading} callback={handleAddNewBreed} />
               </div>
    }

    return <div>
        <h3>Your Collection</h3>
        <RandomBreed updateLoadingStatus={setLoading} callback={handleAddNewBreed} />
        <div className="row">
            {
                collection.map((item) => (
                    <DogCart breedName={item[0]}
                             key={item[0]}
                             breedImg={(item[1] || imagePlaceholder) as string}
                             removeBreed={handleRemoveBreed}/>
                ))
            }
        </div>
    </div>
}