import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import AvatarImg from '@/shared/assets/tests/storybook.png';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: { backgroundColor: { control: 'color' } },
    decorators: [
        StoreDecorator({
            profile: {
                readonly: true,
                form: {
                    firstname: 'Evgenii',
                    lastname: 'TSovich',
                    age: 23,
                    currency: 'EUR',
                    country: 'Russia',
                    city: 'Moscow',
                    username: 'admin',
                    avatar: AvatarImg,
                },
            },
        }),
    ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
