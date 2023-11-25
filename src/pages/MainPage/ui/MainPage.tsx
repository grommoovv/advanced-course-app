import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page dataTestid='MainPage'>
            <p>{t('Гланвая страница')}</p>
        </Page>
    );
});

export default MainPage;
