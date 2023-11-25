import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import s from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data: notifications, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <ul className={classNames(s.list, [className], {})}>
                <Skeleton width='100%' height='80px' border='8px' />
                <Skeleton width='100%' height='80px' border='8px' />
                <Skeleton width='100%' height='80px' border='8px' />
            </ul>
        );
    }

    return (
        <ul className={classNames(s.list, [className], {})}>
            {notifications?.map((item) => (
                <NotificationItem key={item.id} {...item} />
            ))}
        </ul>
    );
});
