import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { getProfileData, getProfileReadonly } from '../../model/selectors';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import s from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    ({ className }: EditableProfileCardHeaderProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;
        const readonly = useSelector(getProfileReadonly);

        const handleEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const handleCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const handleSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <div className={classNames(s.header, [className], {})}>
                <Text title={t('Профиль')} className={s.title} />
                {canEdit &&
                    (readonly ? (
                        <Button
                            theme='primary'
                            onClick={handleEdit}
                            data-testid='EditableProfileCardHeader.EditButton'
                        >
                            {t('Изменить')}
                        </Button>
                    ) : (
                        <div className={s.btns}>
                            <Button
                                theme='blue'
                                onClick={handleSave}
                                data-testid='EditableProfileCardHeader.SaveButton'
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                theme='primary'
                                onClick={handleCancelEdit}
                                data-testid='EditableProfileCardHeader.CancelButton'
                            >
                                {t('Отменить')}
                            </Button>
                        </div>
                    ))}
            </div>
        );
    },
);
