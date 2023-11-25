export interface UpdateProfileProps {
    name: string;
    surname: string;
}

export const updateProfile = ({ name, surname }: UpdateProfileProps) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(name);
    cy.getByTestId('ProfileCard.Lastname').clear().type(surname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asd' },
        body: {
            id: 'test',
            firstname: 'Harry',
            lastname: 'Potter',
            age: 21,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(props: UpdateProfileProps): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
