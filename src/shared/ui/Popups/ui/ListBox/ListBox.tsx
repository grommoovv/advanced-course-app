import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import s from './ListBox.module.scss';
import popupS from '../../styles/Popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    onChange: <T extends string>(val: T) => void;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    className?: string;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

export const ListBox = ({
    className,
    items,
    defaultValue,
    onChange,
    value,
    readonly,
    label,
    direction = 'bottomRight',
}: ListBoxProps) => (
    <HListBox
        as='div'
        value={value}
        onChange={onChange}
        className={classNames(s.listBox, [className], {})}
        disabled={readonly}
    >
        <div className={s.info}>
            {label && <span>{`${label} >`}</span>}
            <HListBox.Button as='div' className={popupS.trigger}>
                <Button theme={readonly ? 'primary' : 'blue'}>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
        </div>
        <HListBox.Options
            className={classNames(s.options, [popupS[direction]], {})}
        >
            {items?.map((item) => (
                <HListBox.Option
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    as={Fragment}
                >
                    {({ active, selected }) => (
                        <li
                            className={classNames(s.item, [], {
                                [s.active]: active,
                                [s.disabled]: item.disabled,
                            })}
                        >
                            {selected && '*'}
                            {item.content}
                        </li>
                    )}
                </HListBox.Option>
            ))}
        </HListBox.Options>
    </HListBox>
);
