import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../const/const';

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    form?: Profile;
    error?: string;
    validateErrors?: ValidateProfileError[];
}
