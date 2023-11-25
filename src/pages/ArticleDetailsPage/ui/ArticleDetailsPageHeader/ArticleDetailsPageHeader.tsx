import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import s from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation('article');
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);

        return (
            <div className={classNames(s.header, [className], {})}>
                <AppLink
                    to={getRouteArticles()}
                    theme='primary'
                    className={s.link}
                >
                    {t('Вернуться к списку')}
                </AppLink>
                {canEdit && (
                    <AppLink
                        to={getRouteArticleEdit(article!.id)}
                        theme='primary'
                        className={s.link}
                    >
                        {t('Редактировать')}
                    </AppLink>
                )}
            </div>
        );
    },
);
