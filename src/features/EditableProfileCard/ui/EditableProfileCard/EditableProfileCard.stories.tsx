import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Profile } from '@/entities/Profile';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

const formData: Profile = {
    id: '1',
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 23,
    currency: 'EUR',
    country: 'Russia',
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: formData,
            readonly: true,
        },
    }),
];

export const Editable = Template.bind({});
Editable.args = {};
Editable.decorators = [
    StoreDecorator({
        profile: {
            form: formData,
        },
    }),
];
