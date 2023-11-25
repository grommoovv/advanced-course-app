import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Skeleton } from '../Skeleton';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import s from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo(
    ({ className, size = 100, src, alt }: AvatarProps) => {
        const styles = useMemo<CSSProperties>(
            () => ({
                width: size,
                height: size,
            }),
            [size],
        );

        const fallback = <Skeleton width={size} height={size} border='50%' />;
        const errorFallback = (
            <Icon width={size} height={size} Svg={UserIcon} />
        );

        return (
            <div
                className={classNames(s.avatar, [className], {})}
                style={styles}
            >
                <AppImage
                    src={src}
                    alt={alt}
                    fallback={fallback}
                    errorFallback={errorFallback}
                />
            </div>
        );
    },
);
