import { logoutFirebase } from '../../../firebase/providers';
import { checkingCredentials, logout } from '../../../store/auth/AuthSlice';

import { useAppDispatch } from './../../../store/store';

export const useLogOut = () => {
  const dispatch = useAppDispatch();

  const logOutFire = async () => {

    dispatch(checkingCredentials());

    await logoutFirebase();
    await localStorage.clear();

    dispatch(logout(""));
  }

  return {
    logOutFire
  }
}
