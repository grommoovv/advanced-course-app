import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import s from './ArticleList.module.scss';
import { ArticleView } from '../../model/const/const';

interface ArticleListProps {
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.BIG ? 3 : 9)
        .fill(0)
        .map((el, i) => <ArticleListItemSkeleton view={view} key={i} />);

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    }: ArticleListProps) => {
        const renderArticle = useCallback(
            (article: Article) => (
                <ArticleListItem
                    key={article.id}
                    article={article}
                    view={view}
                    target={target}
                />
            ),
            [target, view],
        );

        return (
            <div
                className={classNames(s.articleList, [className, s[view]], {})}
                data-testid='ArticleList'
            >
                {articles?.length > 0 ? articles.map(renderArticle) : null}
                {isLoading && getSkeletons(view)}
            </div>
        );
    },
);
