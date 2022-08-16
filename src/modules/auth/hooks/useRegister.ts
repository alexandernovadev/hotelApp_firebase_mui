import { useAppDispatch } from './../../../store/store';

import { registerUserWithEmailPassword } from '../../../firebase/providers';
import { checkingCredentials, login, logout } from '../../../store/auth/AuthSlice';

interface UserRegister {
  email: string;
  password: string;
  displayName: string;
}

export const useRegister = () => {

  const dispatch = useAppDispatch();

  const register = async ({
    email,
    password,
    displayName
  }: UserRegister) => {

    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    console.log("Hp vamos ", result);

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  }
  return {
    register
  }
}
