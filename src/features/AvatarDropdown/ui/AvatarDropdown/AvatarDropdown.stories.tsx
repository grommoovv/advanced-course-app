import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: { backgroundColor: { control: 'color' } },
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
