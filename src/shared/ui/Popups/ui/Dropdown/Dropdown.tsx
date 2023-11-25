import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import s from './Dropdown.module.scss';
import popupS from '../../styles/Popup.module.scss';

export interface DropdownItems {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    items: DropdownItems[];
    trigger: ReactNode;
    className?: string;
    direction?: DropdownDirection;
}

export const Dropdown = ({
    className,
    items,
    trigger,
    direction = 'bottomRight',
}: DropdownProps) => (
    <Menu as='div' className={classNames(s.dropdown, [className], {})}>
        <Menu.Button className={popupS.trigger}>{trigger}</Menu.Button>
        <Menu.Items className={classNames(s.menu, [popupS[direction]], {})}>
            {items.map((item, i) => {
                const content = ({ active }: { active: boolean }) => (
                    <button
                        onClick={item.onClick}
                        className={classNames(s.item, [], {
                            [s.active]: active,
                        })}
                        disabled={item.disabled}
                    >
                        {item.content}
                    </button>
                );

                if (item.href) {
                    return (
                        <Menu.Item
                            key={i}
                            as={Link}
                            to={item.href}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                }

                return (
                    <Menu.Item key={i} as={Fragment} disabled={item.disabled}>
                        {content}
                    </Menu.Item>
                );
            })}
        </Menu.Items>
    </Menu>
);
