import { memo } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => (
        <Popover
            className={className}
            trigger={
                <Button>
                    <Icon Svg={NotificationIcon} iconStyle='primary' />
                </Button>
            }
        >
            <NotificationList />
        </Popover>
    ),
);
