import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleBlockType, ArticleView } from '../../model/const/const';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}

export const ArticleListItem = memo(
    ({ className, article, view, target = '_self' }: ArticleListItemProps) => {
        const { t } = useTranslation('article');
        const { title, img, type, views, user, id, blocks } = article;

        if (view === ArticleView.BIG) {
            const textBlock = blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;

            return (
                <article
                    className={classNames(
                        s.articleItem,
                        [className, s[view]],
                        {},
                    )}
                    data-testid='ArticleListItem'
                >
                    <Card>
                        <div className={s.header}>
                            <div className={s.userInfo}>
                                <Avatar size={30} src={user.avatar} />
                                <Text text={user.username} />
                            </div>
                            <time dateTime={article.createdAt}>
                                {article.createdAt}
                            </time>
                        </div>
                        <h3 className={s.title}>{title}</h3>
                        <Text text={type.join(', ')} />
                        <div className={s.imageWrapper}>
                            <AppImage
                                src={img}
                                alt={title}
                                fallback={
                                    <Skeleton width='100%' height={200} />
                                }
                            />
                        </div>
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={s.textBlock}
                            />
                        )}
                        <div className={s.footer}>
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(id)}
                                theme='primary'
                            >
                                {t('Читать далее...')}
                            </AppLink>
                            <div className={s.views}>
                                <Text text={String(views)} />
                                <Icon Svg={EyeIcon} iconStyle='primary' />
                            </div>
                        </div>
                    </Card>
                </article>
            );
        }

        return (
            <article
                className={classNames(s.articleItem, [className, s[view]], {})}
                data-testid='ArticleListItem'
            >
                <AppLink
                    target={target}
                    to={getRouteArticleDetails(id)}
                    theme='primary'
                >
                    <Card>
                        <div className={s.imageWrapper}>
                            <AppImage
                                src={img}
                                alt={title}
                                fallback={<Skeleton width={180} height={180} />}
                            />
                            <time dateTime={article.createdAt}>
                                {article.createdAt}
                            </time>
                        </div>
                        <div className={s.infoWrapper}>
                            <Text text={type.join(', ')} size='size_s' />
                            <div className={s.views}>
                                <Text text={String(views)} size='size_s' />
                                <Icon Svg={EyeIcon} iconStyle='primary' />
                            </div>
                        </div>
                        <h3 className={s.title}>{title}</h3>
                    </Card>
                </AppLink>
            </article>
        );
    },
);
