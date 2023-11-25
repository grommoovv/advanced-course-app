import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticlesPage from './ArticlesPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: { backgroundColor: { control: 'color' } },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
