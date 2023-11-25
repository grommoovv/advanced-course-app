import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StartIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import s from './StarRating.module.scss';

interface StarRatingProps {
    onSelect?: (score: number) => void;
    selectedStars?: number;
    size?: number;
    className?: string;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
    ({
        className,
        onSelect,
        selectedStars = 0,
        size = 30,
    }: StarRatingProps) => {
        const [currentStarsCount, setCurrentStarsCount] =
            useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const handleHover = useCallback(
            (starsCount: number) => {
                if (!isSelected) {
                    setCurrentStarsCount(starsCount);
                }
            },
            [isSelected],
        );

        const handleLeaveMouse = useCallback(() => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        }, [isSelected]);

        const handleClick = (starsCount: number) => {
            if (!isSelected) {
                onSelect?.(starsCount);
                setCurrentStarsCount(starsCount);
                setIsSelected(true);
            }
        };

        return (
            <div className={classNames(s.wrapper, [className], {})}>
                {stars.map((score) => (
                    <Icon
                        key={score}
                        Svg={StartIcon}
                        width={size}
                        height={size}
                        className={classNames(s.starIcon, [], {
                            [s.hovered]: currentStarsCount >= score,
                            [s.selected]: isSelected,
                        })}
                        onMouseLeave={handleLeaveMouse}
                        onMouseEnter={() => handleHover(score)}
                        onClick={() => handleClick(score)}
                        data-testid={`StarRating.${score}`}
                        data-selected={currentStarsCount >= score}
                    />
                ))}
            </div>
        );
    },
);
