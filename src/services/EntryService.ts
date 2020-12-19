import * as SecureStore from 'expo-secure-store';

const getAllEntries = async () => {
    const res = await SecureStore.getItemAsync('entries');
    if(res)
        return JSON.parse(res);
    return null;
}

const addEntry = async (entry: string) => {
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

const purgeEntries = async () => {
    await SecureStore.deleteItemAsync('entries');
}

export {getAllEntries, addEntry, purgeEntries};