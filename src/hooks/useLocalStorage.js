import { useState, useEffect } from "react";

export default (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};
