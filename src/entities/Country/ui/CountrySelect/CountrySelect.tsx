import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: 'Russia', content: 'Russia' },
    { value: 'Armenia', content: 'Armenia' },
    { value: 'Belarus', content: 'Belarus' },
    { value: 'Kazakhstan', content: 'Kazakhstan' },
    { value: 'Ukraine', content: 'Ukraine' },
];

export const CountrySelect = memo(
    ({ className, onChange, value, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const handleChange = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                className={className}
                onChange={handleChange}
                value={value}
                items={options}
                defaultValue={t('Укажите страну')}
                readonly={readonly}
                label={t('Страна')}
                direction='topRight'
            />
        );
    },
);
