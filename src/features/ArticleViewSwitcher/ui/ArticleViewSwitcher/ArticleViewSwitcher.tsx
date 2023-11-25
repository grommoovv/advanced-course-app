import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-view.svg';
import TiledIcon from '@/shared/assets/icons/tiled-view.svg';
import s from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
    className?: string;
}

const viewTypes = [
    { view: ArticleView.SMALL, icon: TiledIcon },
    { view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSwitcher = memo(
    ({ className, onViewClick, view }: ArticleViewSwitcherProps) => (
        <div className={classNames(s.switchers, [className], {})}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={() => onViewClick?.(viewType.view)}
                    className={s.switcher}
                >
                    <Icon
                        Svg={viewType.icon}
                        iconStyle={viewType.view === view ? 'blue' : 'primary'}
                    />
                </Button>
            ))}
        </div>
    ),
);
