import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    id?: string;
    className?: string;
}

const ArticleRating = memo(({ className, id }: ArticleRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id!,
        articleId: id!,
    });
    const [rateArticle] = useRateArticle();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticle({
                    userId: userData?.id!,
                    articleId: id!,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [id, rateArticle, userData],
    );

    const handleCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const handleAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width='100%' height={115} />;
    }

    return (
        <RatingCard
            className={className}
            rate={data?.[0]?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье')}
            hasFeedback
            onAccept={handleAccept}
            onCancel={handleCancel}
        />
    );
});

export default ArticleRating;
