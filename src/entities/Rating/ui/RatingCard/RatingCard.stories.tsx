import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        title: 'Как вам статья?',
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
