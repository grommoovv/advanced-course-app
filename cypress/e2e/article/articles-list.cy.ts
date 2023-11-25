import { getRouteArticles } from '../../../src/shared/const/router';

describe('visit Articles list page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit(getRouteArticles());
        });
    });

    it('articles is loading successfully', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
