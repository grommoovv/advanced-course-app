import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('selector getProfileForm', () => {
    test('should return form', () => {
        const form: Profile = {
            firstname: 'Evgenii',
            lastname: 'TSovich',
            age: 23,
            currency: 'EUR',
            country: 'Russia',
            city: 'Moscow',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: { form },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
