import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(() => {
    const local = localStorage.getItem(key);
    return local ?? initial;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
