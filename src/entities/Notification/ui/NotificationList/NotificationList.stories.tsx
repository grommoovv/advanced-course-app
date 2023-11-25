import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notification';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: { backgroundColor: { control: 'color' } },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

const notification: Notification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое то событие',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2', href: '123' },
                { ...notification, id: '3' },
                { ...notification, id: '4', href: '123' },
            ],
        },
    ],
};
