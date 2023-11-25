import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text } from '@/shared/ui/Text';
import { ProfileCard } from '@/entities/Profile';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ValidateProfileError } from '../../model/const/const';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import {
    getProfileForm,
    getProfileValidateErrors,
    getProfileReadonly,
    getProfileError,
    getProfileIsLoading,
} from '../../model/selectors';

interface EditableProfileCardProps {
    id?: string;
    className?: string;
}

const reducers: ReducersList = { profile: profileReducer };

export const EditableProfileCard = memo(
    ({ className, id }: EditableProfileCardProps) => {
        const { t } = useTranslation('profile');
        const dispatch = useAppDispatch();
        const formData = useSelector(getProfileForm);
        const error = useSelector(getProfileError);
        const isLoading = useSelector(getProfileIsLoading);
        const readonly = useSelector(getProfileReadonly);
        const validateErrors = useSelector(getProfileValidateErrors);

        const validateErrorTranslates = {
            [ValidateProfileError.INCORRECT_USER_DATA]: t(
                'Имя и фамилия обязательны',
            ),
            [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
            [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
            [ValidateProfileError.INCORRECT_USERNAME]: t(
                'Имя пользователя обязательно',
            ),
            [ValidateProfileError.INCORRECT_CURRENCY]: t('Некорректная валюта'),
            [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
            [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
            [ValidateProfileError.SERVER_ERROR]: t(
                'Ошибка сервера при сохранении',
            ),
        };

        useInitialEffect(() => {
            if (id) {
                dispatch(fetchProfileData(id));
            }
        });

        const handleChangeFirstname = useCallback(
            (value?: string) => {
                dispatch(profileActions.updateProfile({ firstname: value }));
            },
            [dispatch],
        );

        const handleChangeLastname = useCallback(
            (value?: string) => {
                dispatch(
                    profileActions.updateProfile({ lastname: value || '' }),
                );
            },
            [dispatch],
        );

        const handleChangeAge = useCallback(
            (value?: string) => {
                const age = Number(value);

                if (age >= 0) {
                    dispatch(profileActions.updateProfile({ age }));
                }
            },
            [dispatch],
        );

        const handleChangeCity = useCallback(
            (value?: string) => {
                dispatch(profileActions.updateProfile({ city: value || '' }));
            },
            [dispatch],
        );

        const handleChangeUsername = useCallback(
            (value?: string) => {
                dispatch(
                    profileActions.updateProfile({ username: value || '' }),
                );
            },
            [dispatch],
        );

        const handleChangeAvatar = useCallback(
            (value?: string) => {
                dispatch(profileActions.updateProfile({ avatar: value || '' }));
            },
            [dispatch],
        );

        const handleChangeCurrency = useCallback(
            (currency: Currency) => {
                dispatch(profileActions.updateProfile({ currency }));
            },
            [dispatch],
        );

        const handleChangeCountry = useCallback(
            (country: Country) => {
                dispatch(profileActions.updateProfile({ country }));
            },
            [dispatch],
        );

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div className={className}>
                    <EditableProfileCardHeader />
                    {validateErrors?.length &&
                        validateErrors.map((err) => (
                            <Text
                                key={err}
                                theme='error'
                                text={validateErrorTranslates[err]}
                                data-testid='EditableProfileCard.Error'
                            />
                        ))}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        handleChangeFirstname={handleChangeFirstname}
                        handleChangeLastname={handleChangeLastname}
                        handleChangeAge={handleChangeAge}
                        handleChangeCity={handleChangeCity}
                        handleChangeUsername={handleChangeUsername}
                        handleChangeAvatar={handleChangeAvatar}
                        handleChangeCurrency={handleChangeCurrency}
                        handleChangeCountry={handleChangeCountry}
                    />
                </div>
            </DynamicModuleLoader>
        );
    },
);
