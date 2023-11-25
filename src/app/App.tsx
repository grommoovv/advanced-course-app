import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className='app'>
            <Header />
            <div className='content-page'>
                <Sidebar />
                <main>{inited && <AppRouter />}</main>
            </div>
        </div>
    );
};
