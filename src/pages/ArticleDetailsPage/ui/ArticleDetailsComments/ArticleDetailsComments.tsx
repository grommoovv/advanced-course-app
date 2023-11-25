import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentsList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/articleDetailsPageCommentsSlice';
import {
    addCommentForArticle,
    fetchCommentsByArticleId,
} from '../../model/services';
import s from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    id?: string;
    className?: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation('comments');
        const dispatch = useAppDispatch();
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
        const comments = useSelector(getArticleComments.selectAll);

        const handleSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <div className={classNames(s.wrapper, [className], {})}>
                <Text title={t('Комментарии')} className={s.title} />
                <AddCommentForm onSendComment={handleSendComment} />
                <CommentsList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        );
    },
);
