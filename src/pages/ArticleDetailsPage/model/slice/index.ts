import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageCommentsReducer } from '../slice/articleDetailsPageCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from '../slice/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsPageRecommendationsReducer,
        comments: articleDetailsPageCommentsReducer,
    });
