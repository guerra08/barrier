import * as SecureStore from 'expo-secure-store';
import IEntry from '../interfaces/IEntry';
import { v4 as uuidv4 } from 'uuid';

const getAllEntries = async () => {
    const res = await SecureStore.getItemAsync('entries');
    return res;
}

const addEntry = async (entry: IEntry) => {
    const toAdd: IEntry = {id: uuidv4(), name: 'name', secret: 'secret'}
    const dataString = await SecureStore.getItemAsync('entries');
    if(dataString){
        const data = JSON.parse(dataString);
        data.unshift(toAdd);
        SecureStore.setItemAsync('entries', JSON.stringify(data));
    }
    else{
        SecureStore.setItemAsync('entries', JSON.stringify([{id: uuidv4(), name: 'name', secret: 'secret'}]));
    }
}