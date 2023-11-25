import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps extends Notification {
    className?: string;
}

export const NotificationItem = memo(
    ({ className, description, href, title }: NotificationItemProps) => {
        const content = <Text title={title} text={description} />;

        return (
            <li className={className}>
                {href ? (
                    <a href={href} target='_blank' rel='noreferrer'>
                        {content}
                        {'->'}
                    </a>
                ) : (
                    content
                )}
            </li>
        );
    },
);
