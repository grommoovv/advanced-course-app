import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { getArticlesPageHasMore } from '../../model/selectors/articlesPageSelectors/articlesPageSelectors';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const hasMore = useSelector(getArticlesPageHasMore);

    const handleLoadNextPage = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch, hasMore]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeWhenUnmount={false}>
            <Page
                className={classNames(s.articlesPage, [className], {})}
                onScrollEnd={handleLoadNextPage}
                dataTestid='ArticlesPage'
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
