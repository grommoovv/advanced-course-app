import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        trigger: <Button>Open</Button>,
        children: (
            <ul>
                <li>Notification</li>
                <li>Notification</li>
                <li>Notification</li>
            </ul>
        ),
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
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
