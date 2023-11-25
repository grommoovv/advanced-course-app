import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const [theme, toggleTheme] = useTheme();

    const ThemeIcon = theme === Theme.LIGHT ? SunIcon : MoonIcon;

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(s.switcher, [className], {})}
            theme='clear'
        >
            <ThemeIcon className={s.icon} />
        </Button>
    );
});
