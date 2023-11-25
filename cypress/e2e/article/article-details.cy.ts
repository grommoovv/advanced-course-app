import { getRouteArticleDetails } from '../../../src/shared/const/router';
import { SetRateProps } from '../../support/commands/rating';

let articleId: string;

describe('Article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            articleId = article.id;
            cy.visit(getRouteArticleDetails(article.id));
        });
    });

    afterEach(() => {
        cy.removeArticle(articleId);
    });

    it('should visit ArticleDetailsPage', () => {
        cy.getByTestId('ArticleDetailsPage').should('exist');
    });

    it('should visit ArticleRecommendationsList', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('leaves a comment', () => {
        cy.getByTestId('ArticleDetailsPage');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('put a rating', () => {
        const rateData: SetRateProps = {
            starsCount: 4,
            feedback: 'feedback',
        };

        cy.getByTestId('ArticleDetailsPage');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(rateData);
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
