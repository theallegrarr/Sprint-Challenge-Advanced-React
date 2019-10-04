import { useState } from "react";

const getLocalData = (key) => {
  const mode = localStorage.getItem(key);
  
  if(mode==='true' || mode==='false'){
    return JSON.parse(mode);
  }

  return null;
}

export default function SetViewMode(key, initialValue) {
  const [darkMode, setDarkMode] = useState(() => {
    return getLocalData(key) ? getLocalData(key) : initialValue;
  });

  const toggleMode = (e) => {
    e.preventDefault();

    if(darkMode) {
      setDarkMode(false);
      localStorage.setItem(key, false);
    } else {
      setDarkMode(true);
      localStorage.setItem(key, true);
    }
  };

  return [darkMode, toggleMode];
}