import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { getArticles } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(
    ({ className }: ArticleInfiniteListProps) => {
        const { t } = useTranslation('article');
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const error = useSelector(getArticlesPageError);
        const articlesView = useSelector(getArticlesPageView);

        if (error) {
            return (
                <Text
                    title={t('Произошла ошибка при загрузке списка статей')}
                    theme='error'
                    align='center'
                />
            );
        }

        return (
            <ArticleList
                isLoading={isLoading}
                articles={articles}
                view={articlesView}
                className={className}
            />
        );
    },
);
