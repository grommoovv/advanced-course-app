import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Text.module.scss';

export type TextTheme = 'primary' | 'error';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'size_s' | 'size_m' | 'size_l';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    Heading?: HeadingType;
    'data-testid'?: string;
}

export const Text = memo(
    ({
        className,
        title,
        text,
        theme = 'primary',
        align = 'left',
        size = 'size_m',
        Heading = 'h3',
        'data-testid': dataTestId = 'Text',
    }: TextProps) => (
        <div
            className={classNames(
                '',
                [className, s[theme], s[align], s[size]],
                {},
            )}
        >
            {title && (
                <Heading
                    className={s.title}
                    data-testid={`${dataTestId}.Heading`}
                >
                    {title}
                </Heading>
            )}
            {text && (
                <p className={s.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    ),
);
