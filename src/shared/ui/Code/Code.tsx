import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import DoneIcon from '@/shared/assets/icons/done.svg';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import s from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text).then(() => {
            if (!isCopied) {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 600);
            }
        });
    }, [isCopied, text]);

    return (
        <pre
            className={classNames(s.code, [className], {
                [s.copied]: isCopied,
            })}
        >
            <Button className={s.copyBtn} onClick={handleCopy}>
                <Icon Svg={CopyIcon} iconStyle='primary' />
            </Button>
            <code>{text}</code>
            <Icon
                Svg={DoneIcon}
                className={s.successIcon}
                iconStyle='success'
            />
        </pre>
    );
});
