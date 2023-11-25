import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: 'RUB', content: 'RUB' },
    { value: 'EUR', content: 'EUR' },
    { value: 'USD', content: 'USD' },
];

export const CurrencySelect = memo(
    ({ className, onChange, value, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const handleChange = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <ListBox
                className={className}
                onChange={handleChange}
                value={value}
                items={options}
                defaultValue={t('Укажите валюту')}
                readonly={readonly}
                label={t('Валюта')}
                direction='topRight'
            />
        );
    },
);
