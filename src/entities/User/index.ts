export { userReducer, userActions } from './model/slice/userSlice';
export * from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    isUserAdmin,
    isUserManager,
    getUserRole,
} from './model/selectors/roleSelectors';
