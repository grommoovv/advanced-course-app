import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import s from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = ({
    className,
}: ArticleRecommendationsListProps) => {
    const { t } = useTranslation('article');
    const { data: articles } = useArticleRecommendationsList(3);

    if (!articles) {
        return null;
    }

    return (
        <div
            className={classNames(s.wrapper, [className], {})}
            data-testid='ArticleRecommendationsList'
        >
            <Text title={t('Рекомендуем')} className={s.title} />
            <ArticleList articles={articles} target='_blank' />
        </div>
    );
};
