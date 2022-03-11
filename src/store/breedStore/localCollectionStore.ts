import {ICollectionItem} from "../../model/collection";

const STORAGE_KEY = "breed_collection"

export class LocalCollectionStore {
    static initCollection () {
        const collection = {};
        localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
        return collection;
    }
    static getCollection () {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }
    static addItem (newItem: ICollectionItem) {
        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        storedData[newItem.breedName] = newItem.image;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
        return storedData;
    }
    static removeItem (breedName: string) {
        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        delete storedData[breedName];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
        return storedData;
    }
    static isInCollection (breedName: string) {
        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        return !!storedData[breedName];
    }
}