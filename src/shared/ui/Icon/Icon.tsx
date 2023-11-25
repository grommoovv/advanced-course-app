import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

export type IconStyle = 'clear' | 'primary' | 'success' | 'error' | 'blue';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    iconStyle?: IconStyle;
}

export const Icon = memo(
    ({ className, Svg, iconStyle = 'clear', ...props }: IconProps) => (
        <Svg
            className={classNames(s.icon, [className, s[iconStyle]], {})}
            {...props}
        />
    ),
);
