import { getRouteProfile } from '../../../src/shared/const/router';
import { UpdateProfileProps } from '../../support/commands/profile';

let profileId: string;

describe('ProfilePage', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(getRouteProfile(data.id));
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('profile is loading successfully', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'Harry');
    });

    it('', () => {
        const profileData: UpdateProfileProps = {
            name: 'Evgenii',
            surname: 'Tsovich',
        };
        cy.updateProfile(profileData);
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            profileData.name,
        );
        cy.getByTestId('ProfileCard.Lastname').should(
            'have.value',
            profileData.surname,
        );
    });
});
