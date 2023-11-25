import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 23,
    currency: 'USD',
    country: 'Russia',
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin123',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('readonly should switch', async () => {
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('when canceled, values should return', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        const editBtn = screen.getByTestId(
            'EditableProfileCardHeader.EditButton',
        );
        const inputFirstname = screen.getByTestId('ProfileCard.Firstname');
        const inputLastname = screen.getByTestId('ProfileCard.Lastname');
        const newValue = 'user';

        await userEvent.click(editBtn);
        const cancelBtn = screen.getByTestId(
            'EditableProfileCardHeader.CancelButton',
        );

        await userEvent.clear(inputFirstname);
        await userEvent.clear(inputLastname);

        await userEvent.type(inputFirstname, newValue);
        await userEvent.type(inputLastname, newValue);

        expect(inputFirstname).toHaveValue(newValue);

        await userEvent.click(cancelBtn);

        expect(inputFirstname).toHaveValue('admin');
        expect(inputLastname).toHaveValue('admin');
    });

    test('should show validate error', async () => {
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('should show validate error', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'user',
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
