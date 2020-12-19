import * as SecureStore from 'expo-secure-store';
import { TOTP } from 'otpauth';

const getAllEntries = async () => {
    const res = await SecureStore.getItemAsync('entries');
    if(res)
        return JSON.parse(res);
    return null;
}

const addEntry = async (entry: TOTP) => {
    const dataString = await SecureStore.getItemAsync('entries');
    if(dataString){
        const data = JSON.parse(dataString);
        data.unshift(entry);
        SecureStore.setItemAsync('entries', JSON.stringify(data));
    }
    else{
        SecureStore.setItemAsync('entries', JSON.stringify([entry]));
    }
}