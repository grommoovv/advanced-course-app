import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: { backgroundColor: { control: 'color' } },
    args: { to: '/' },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args}>Link</AppLink>
);

export const PrimaryLight_S = Template.bind({});
PrimaryLight_S.args = {
    theme: 'primary',
    size: 'size_s',
};

export const PrimaryLight_M = Template.bind({});
PrimaryLight_M.args = {
    theme: 'primary',
    size: 'size_m',
};

export const PrimaryLight_L = Template.bind({});
PrimaryLight_L.args = {
    theme: 'primary',
    size: 'size_l',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { theme: 'primary' };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
