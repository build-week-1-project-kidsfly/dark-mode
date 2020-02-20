import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage('your key here')
}