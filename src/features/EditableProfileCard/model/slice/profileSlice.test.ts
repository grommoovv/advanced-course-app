import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../const/const';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const data: Profile = {
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 23,
    currency: 'EUR',
    country: 'Russia',
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'Username' },
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: 'NewUsername' }),
            ),
        ).toEqual({ form: { username: 'NewUsername' } });
    });

    test('updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
