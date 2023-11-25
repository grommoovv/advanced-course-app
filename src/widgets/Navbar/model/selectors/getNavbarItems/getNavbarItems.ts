import { createSelector } from '@reduxjs/toolkit';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';
import MainPageIcon from '@/shared/assets/icons/main-page.svg';
import AboutPageIcon from '@/shared/assets/icons/about-page.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page.svg';
import ArticlePageIcon from '@/shared/assets/icons/article-page.svg';
import { NavbarItemType } from '../../types/navbar';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: NavbarItemType[] = [
        { path: getRouteMain(), text: 'Главная', Icon: MainPageIcon },
        { path: getRouteAbout(), text: 'О нас', Icon: AboutPageIcon },
    ];

    if (userData) {
        navbarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: ProfilePageIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: ArticlePageIcon,
                authOnly: true,
            },
        );
    }
    return navbarItemsList;
});
