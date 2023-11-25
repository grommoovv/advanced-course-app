import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import {
    ArticleDetails,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import s from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const articleIsLoading = useSelector(getArticleDetailsIsLoading);
    const articleError = useSelector(getArticleDetailsError);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(s.articleDetailsPage, [className], {})}
                dataTestid='ArticleDetailsPage'
            >
                <article>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {!articleIsLoading && !articleError && (
                        <>
                            <ArticleRating id={id} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </>
                    )}
                </article>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
