import { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRouteArticleCreate, getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { AppLink } from '@/shared/ui/AppLink';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const logo = useMemo(
        () => (
            <AppLink to={getRouteMain()} className={s.logoLink}>
                <Text title='Logo' size='size_l' Heading='h1' />
            </AppLink>
        ),
        [],
    );

    if (authData) {
        return (
            <header className={classNames(s.header, [className], {})}>
                <div className={s.left}>
                    {logo}
                    <AppLink to={getRouteArticleCreate()}>
                        {t('Создать статью')}
                    </AppLink>
                </div>
                <div className={s.buttons}>
                    <NotificationButton />
                    <AvatarDropdown />
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(s.header, [className], {})}>
            <div className={s.left}>{logo}</div>
            <div className={s.buttons}>
                <Button
                    className={s.loginBtn}
                    theme='clear'
                    onClick={handleOpenModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
            )}
        </header>
    );
});
