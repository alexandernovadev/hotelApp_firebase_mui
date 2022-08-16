import { RootState, useAppDispatch } from './../store/store';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { FirebaseAuth } from "../firebase/config";
import { checkingCredentialsFirebase, login, logout } from "../store/auth/AuthSlice";

export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkingCredentialsFirebase())

    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(""));

      console.log("Algo pasa con este hook  ", user);

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));

      // dispatch(load ALOG ???())
    });
  }, []);

  return status;
};
