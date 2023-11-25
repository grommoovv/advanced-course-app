import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecondaryBgColorDecorator } from '@/shared/config/storybook/SecondaryBgColorDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [SecondaryBgColorDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [SecondaryBgColorDecorator(Theme.DARK)];
