import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/addCommentForm/addCommentForm';
import s from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    onSendComment: (value: string) => void;
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation('comments');
        const dispatch = useAppDispatch();
        const text = useSelector(getAddCommentFormText);

        const handleCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );

        const handleSendComment = useCallback(() => {
            onSendComment(text);
            handleCommentTextChange('');
        }, [handleCommentTextChange, onSendComment, text]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div
                    className={classNames(s.commentForm, [className], {})}
                    data-testid='AddCommentForm'
                >
                    <Input
                        placeholder={t('Введите текст комментария')}
                        value={text}
                        onChange={handleCommentTextChange}
                        data-testid='AddCommentForm.Input'
                    />
                    <Button
                        theme='primary'
                        onClick={handleSendComment}
                        data-testid='AddCommentForm.Button'
                    >
                        {t('Отправить')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
