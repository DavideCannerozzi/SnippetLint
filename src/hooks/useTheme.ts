import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const handleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };
  return { theme, handleTheme };
};
