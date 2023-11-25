export interface SetRateProps {
    starsCount?: number;
    feedback?: string;
}

export const setRate = ({ starsCount = 5, feedback }: SetRateProps) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    if (feedback) {
        cy.getByTestId('RatingCard.Input').type(feedback);
        cy.getByTestId('RatingCard.Send').click();
    } else {
        cy.getByTestId('RatingCard.Close').click();
    }
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(props: SetRateProps): Chainable<void>;
        }
    }
}
