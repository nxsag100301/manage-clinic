import {useSelector} from 'react-redux';

export const useGetUserInfo = () => {
  const user = useSelector(state => state.user);
  return user;
};
