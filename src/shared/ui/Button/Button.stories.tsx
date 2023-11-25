import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const Clear_S = Template.bind({});
Clear_S.args = {
    theme: 'clear',
    size: 'size_s',
};

export const Clear_M = Template.bind({});
Clear_M.args = {
    theme: 'clear',
    size: 'size_m',
};

export const Clear_L = Template.bind({});
Clear_L.args = {
    theme: 'clear',
    size: 'size_l',
};

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

export const BlueLight_S = Template.bind({});
BlueLight_S.args = {
    theme: 'blue',
    size: 'size_s',
};

export const BlueLight_M = Template.bind({});
BlueLight_M.args = {
    theme: 'blue',
    size: 'size_m',
};

export const BlueLight_L = Template.bind({});
BlueLight_L.args = {
    theme: 'blue',
    size: 'size_l',
};

export const BlueDark = Template.bind({});
BlueDark.args = { theme: 'blue' };
BlueDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
    theme: 'primary',
    disabled: true,
};

export const DisabledBlue = Template.bind({});
DisabledBlue.args = {
    theme: 'blue',
    disabled: true,
};
