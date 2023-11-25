import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Testing Article',
    subtitle: 'Lorem ipsum dolor sit amet.',
    img: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    views: 1,
    createdAt: '11.11.2023',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asd' },
            body: article || defaultArticle,
        })
        .then((res) => res.body);

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asd' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
