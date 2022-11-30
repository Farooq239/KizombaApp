import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataToStorage = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeDataFromStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const clearStorage = async () => {
  await AsyncStorage.clear();
};

export const getDataFromStorage = async (value: any) => {
  let data: any = await AsyncStorage.getItem(value);
  let newData = JSON.parse(data);
  return newData;
};
