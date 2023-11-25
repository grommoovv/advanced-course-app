import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        trigger: <Button>Open</Button>,
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
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
