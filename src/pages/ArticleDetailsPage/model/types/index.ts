import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';
import { ArticleDetailsPageCommentsSchema } from './ArticleDetailsPageCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsPageCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}
