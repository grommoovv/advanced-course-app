import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { AppRouter } from './AppRouter';

describe('AppRouter', () => {
    test('should render MainPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });

        const MainPage = await screen.findByTestId('MainPage');
        expect(MainPage).toBeInTheDocument();
    });

    test('should render AboutPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const AboutPage = await screen.findByTestId('AboutPage');
        expect(AboutPage).toBeInTheDocument();
    });

    test('should render NotFoundPage', async () => {
        componentRender(<AppRouter />, {
            route: '/asd',
        });

        const NotFoundPage = await screen.findByTestId('NotFoundPage');
        expect(NotFoundPage).toBeInTheDocument();
    });

    test('should redirect to MainPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const MainPage = await screen.findByTestId('MainPage');
        expect(MainPage).toBeInTheDocument();
    });

    test('should not redirect authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const ProfilePage = await screen.findByTestId('ProfilePage');
        expect(ProfilePage).toBeInTheDocument();
    });

    test('should redirect to ForbiddenPage (missing role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const ForbiddenPage = await screen.findByTestId('ForbiddenPage');
        expect(ForbiddenPage).toBeInTheDocument();
    });

    test('should render AdminPanelPage (has role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: ['ADMIN'] } },
            },
        });

        const AdminPanelPage = await screen.findByTestId('AdminPanelPage');
        expect(AdminPanelPage).toBeInTheDocument();
    });
});
