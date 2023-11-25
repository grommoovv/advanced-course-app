import {
    getRouteMain,
    getRouteProfile,
    getRouteArticles,
} from '../../../src/shared/const/router';

describe('Routing', () => {
    describe('Common to all users', () => {
        it('visit MainPage', () => {
            cy.visit(getRouteMain());
            cy.getByTestId('MainPage').should('exist');
        });

        it('visit non-existent page, should render NotFoundPage', () => {
            cy.visit('/asd');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('User is not logged in', () => {
        it('visit ProfilePage, should redirect to MainPage', () => {
            cy.visit(getRouteProfile('test'));
            cy.getByTestId('MainPage').should('exist');
        });

        it('visit ArticlesPage, should redirect to MainPage', () => {
            cy.visit(getRouteArticles());
            cy.getByTestId('MainPage').should('exist');
        });
    });

    describe('User is logged in', () => {
        beforeEach(() => {
            cy.login();
        });

        it('visit ProfilePage', () => {
            cy.visit(getRouteProfile('test'));
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('visit ArticlesPage', () => {
            cy.visit(getRouteArticles());
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
