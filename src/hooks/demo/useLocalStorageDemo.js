import React from "react";
import { useState } from "react";

function useLocalStorageDemo(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //check is function
    const valueToStorage = value instanceof Function ? value(localStorageValue) : value
    //set to state
    setLocalStorageValue(value)
    //set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStorage))
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue){
  const itemFromLocalStorage = localStorage.getItem(key)
  return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue
}

export default useLocalStorageDemo;
