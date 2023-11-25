import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    username?: string;
    avatar?: string;
    currency?: Currency;
    country?: Country;
    city?: string;
}
