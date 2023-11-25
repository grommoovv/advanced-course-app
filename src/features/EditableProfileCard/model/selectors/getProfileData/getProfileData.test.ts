import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { getProfileData } from './getProfileData';

describe('selector getProfileData', () => {
    test('should return data', () => {
        const data: Profile = {
            firstname: 'Evgenii',
            lastname: 'TSovich',
            age: 23,
            currency: 'EUR',
            country: 'Russia',
            city: 'Moscow',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
