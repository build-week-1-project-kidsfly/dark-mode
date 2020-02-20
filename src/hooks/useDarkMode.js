import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (dark1) => {
    const [darkValue, setDarkValue] = useLocalStorage('bienOscuro', dark1);
    useEffect(() => {
        const body = document.querySelector("body");
        darkValue ? body.classList.add("dark-mode") : body.classList.remove("dark-mode")
    }, [darkValue])

    return [darkValue, setDarkValue];
};