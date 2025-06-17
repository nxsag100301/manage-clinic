import {useSelector} from 'react-redux';
import type {RootState} from '../store';

export const useGetUserInfo = () => {
  const user = useSelector((state: RootState) => state.user);
  return user;
};
