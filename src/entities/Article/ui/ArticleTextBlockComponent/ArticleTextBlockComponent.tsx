import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        const { title, paragraphs } = block;

        return (
            <div className={classNames('', [className], {})}>
                {title && <Text title={title} className={s.title} />}
                {paragraphs.map((paragraph, i) => (
                    <Text key={i} text={paragraph} />
                ))}
            </div>
        );
    },
);
