import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        placeholder: 'Введите данные',
        autoFocus: true,
        value: 'Какие-то данные',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
