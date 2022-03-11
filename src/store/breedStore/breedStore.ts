import {createStore, createEffect} from 'effector';
import axios from "axios";
import {REACT_APP_BREED_LIST_URL} from "../../model/constants";

export const fetchBreeds = createEffect(async () => {
    const breeds = await axios.get(REACT_APP_BREED_LIST_URL);
    return (Object.keys(breeds.data.message));
})

export const breedStore = createStore<string[]>([])
    .on(fetchBreeds.doneData, (_, newData) => newData);