import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
  logoutFirebase,
} from "../../firebase/providers";
// import { clearNotesLogout } from "../journal/JournalSlice";
import { checkingCredentials, logout, login } from "./AuthSlice";
import { AppDispatch, AppThunk } from '../store';

// export const checkingAuthentication = () => {
//   return async (dispatch) => {
//     dispatch(checkingCredentials());
//   };
// };

// export const startGoogleSignIn = () => {
//   return async (dispatch) => {
//     dispatch(checkingCredentials());
//     const result = await singInWithGoogle();

//     if (!result.ok) return dispatch(logout(result.errorMessage));
//     dispatch(login(result));
//   };
// };

interface UserRegister {
  email: string;
  password: string;
  displayName: string;
}

export const startCreatingUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: UserRegister) => {

  // dispatch(checkingCredentials());

  const result = await registerUserWithEmailPassword({
    email,
    password,
    displayName,
  });
  // if (!result.ok) return dispatch(logout(result.errorMessage));

  // dispatch(login(result));
  return result

};

// export const startLoginWithEmailPassword = ({ email, password }) => {
//   return async (dispatch) => {
//     dispatch(checkingCredentials());

//     const result = await loginWithEmailPassword({ email, password });

//     if (!result.ok) return dispatch(logout(result.errorMessage));
//     dispatch(login(result));
//   };
// };

// export const startLogout = () => {
//   return async (dispatch) => {
//     // await logoutFirebase();
//     // dispatch(clearNotesLogout());
//     // dispatch(logout());
//   };
// };
