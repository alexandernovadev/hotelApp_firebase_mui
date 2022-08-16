


import { useAppDispatch } from './../../../store/store';

import { singInWithGoogle } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../../../store/auth/AuthSlice';
import { useTranslation } from 'react-i18next';

export const useGoogleSignIn = () => {

  const dispatch = useAppDispatch();

  const { t } = useTranslation()

  const loginWithGoogle = async () => {

    dispatch(checkingCredentials());
    const result = await singInWithGoogle();

    if (result.errorMessage) {

      let msg = result.errorMessage.includes('Firebase: Error (auth/popup-closed-by-user)')
        ? t("AUTH.POPUP_CLOSED_ERROR")
        : t("COMMON.ERROR_SERVER")

      if (!result.ok) return dispatch(logout(msg));
    }

    dispatch(login(result));
  }

  return {
    loginWithGoogle
  }
}
