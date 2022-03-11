import React, {FC, useState} from "react";
import {useStore} from "effector-react";
import {breedStore} from "../../store/breedStore/breedStore";
import Select from 'react-select'
import {SelectedBreed} from "./selectedBreed/SelectedBreed";
import styles from "./breedSearcher.module.scss";
import {Loader} from "../loader/Loader";

export const BreedSearcher: FC = () => {
    const breeds = useStore(breedStore);
    const selectOptions = breeds.map((breed) => ({label: breed, value: breed}));
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);


    if (!breeds || breeds.length === 0) {
        return <Loader />
    }

    return <div>
        <h2>Explore the World of Dogs</h2>
            <Select placeholder="Select a breed"
                    className={styles.mw500}
                    options={selectOptions}
                    onChange={e => setSelectedBreed(e?.value || null)}
            />
        {
            selectedBreed && <SelectedBreed breedName={selectedBreed} />
        }
    </div>
}