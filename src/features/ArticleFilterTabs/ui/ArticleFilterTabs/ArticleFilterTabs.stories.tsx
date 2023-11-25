import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleFilterTabs } from './ArticleFilterTabs';

export default {
    title: 'features/ArticleFilterTabs',
    component: ArticleFilterTabs,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ArticleFilterTabs>;

const Template: ComponentStory<typeof ArticleFilterTabs> = (args) => (
    <ArticleFilterTabs {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
