import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Popover.module.scss';
import popupS from '../../styles/Popup.module.scss';

interface PopoverProps {
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
    direction?: DropdownDirection;
}

export const Popover = ({
    className,
    trigger,
    children,
    direction = 'bottomRight',
}: PopoverProps) => (
    <HPopover className={classNames(s.popover, [className], {})}>
        <HPopover.Button className={popupS.trigger} as='div'>
            {trigger}
        </HPopover.Button>

        <HPopover.Panel
            className={classNames(s.panel, [popupS[direction]], {})}
        >
            {children}
        </HPopover.Panel>
    </HPopover>
);
