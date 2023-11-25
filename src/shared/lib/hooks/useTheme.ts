import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localstorage';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../../const/theme';

export const useTheme = (): [Theme, () => void] => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const t = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(t);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, t);
    };

    return [theme || Theme.LIGHT, toggleTheme];
};
