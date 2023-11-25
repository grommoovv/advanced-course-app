import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { NavbarItemType } from '../../model/types/navbar';
import s from './NavbarItem.module.scss';

interface NavbarItemProps extends NavbarItemType {
    collapsed: boolean;
}

export const NavbarItem = memo(
    ({ path, text, Icon, collapsed, authOnly }: NavbarItemProps) => {
        const { t } = useTranslation();
        const isAuth = useSelector(getUserAuthData);

        if (authOnly && !isAuth) {
            return null;
        }

        return (
            <AppLink
                to={path}
                size='size_l'
                className={classNames(s.link, [], { [s.collapsed]: collapsed })}
            >
                <Icon className={s.icon} />
                <p className={s.title}>{t(text)}</p>
            </AppLink>
        );
    },
);
