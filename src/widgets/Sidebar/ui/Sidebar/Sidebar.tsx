import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import { Navbar } from '../../../Navbar';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const collapsingButton = useMemo(
        () => (
            <Button
                data-testid='toggle-btn'
                theme='clear'
                onClick={() => setCollapsed((prev) => !prev)}
            >
                <BurgerIcon className={s.icon} />
            </Button>
        ),

        [],
    );

    return (
        <aside
            data-testid='sidebar'
            className={classNames(s.sidebar, [className], {
                [s.collapsed]: collapsed,
            })}
        >
            {collapsingButton}
            <Navbar collapsed={collapsed} />
            <div className={s.switchers}>
                <ThemeSwitcher className={s.switcher} />
                <LangSwitcher className={s.switcher} />
            </div>
        </aside>
    );
});
