import React, {FC} from "react";
import axios from "axios";

interface IProps {
    callback: (breedName: string, image: string) => void;
    updateLoadingStatus: (status: boolean) => void;
}

export const RandomBreed:FC<IProps> = ({ callback, updateLoadingStatus }) => {
    const handleAddRandomBreed = () => {
        updateLoadingStatus(true);
        axios.get(`${process.env.REACT_APP_RANDOM_BREED_IMG_URL}`)
            .then((res) => {
                const imgUrl = res.data.message;
                const breedName = imgUrl.split('/')[4].split('-').join(' ');
                callback(breedName, imgUrl);
            })
            .catch(err => console.error(err))
            .finally(() => updateLoadingStatus(false));
    }

    return <>
            <button className="btn btn-primary"
                    onClick={handleAddRandomBreed}
            >
                🎲 Add Random Breed
            </button>
        </>
}