import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export type AppLinkTheme = 'white' | 'primary';

export type AppLinkSize = 'size_s' | 'size_m' | 'size_l';

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
    size?: AppLinkSize;
}

export const AppLink = memo(
    ({
        className,
        children,
        to,
        theme = 'white',
        size = 'size_m',
        ...props
    }: AppLinkProps) => (
        <Link
            to={to}
            className={classNames(s.link, [className, s[theme], s[size]], {})}
            {...props}
        >
            {children}
        </Link>
    ),
);
