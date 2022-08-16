import { useAppDispatch } from './../../../store/store';

import { loginWithEmailPassword } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../../../store/auth/AuthSlice';
import { useTranslation } from 'react-i18next';

interface UserLogin {
  email: string;
  password: string;
}

export const useLogin = () => {

  const dispatch = useAppDispatch();

  const { t } = useTranslation()

  const loginFire = async ({
    email,
    password
  }: UserLogin) => {

    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (result.errorMessage) {

      let msg = result.errorMessage.includes('Firebase: Error (auth/user-not-found)')
        ? t("AUTH.USER_NO_EXIST")
        : result.errorMessage.includes('Firebase: Error (auth/wrong-password)')
          ? t("AUTH.EMAILORPASSWORD_ERROR")
          : t("COMMON.ERROR_SERVER")

      if (!result.ok) return dispatch(logout(msg));
    }

    dispatch(login(result));

  }

  return {
    loginFire
  }
}
