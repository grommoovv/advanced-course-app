import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ListBox } from './ListBox';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        label: 'Укажите значение',
        defaultValue: 'Значение',
        items: [
            { content: 'Content 1', value: 'Value 1' },
            { content: 'Content 2', value: 'Value 2' },
            { content: 'Content 3', value: 'Value 3' },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'topLeft',
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'topRight',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottomLeft',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottomRight',
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
