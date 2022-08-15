import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  status: 'checking' | 'non-authenticated' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

export const authSlice = createSlice<AuthState, any, string>({
  name: "auth",
  initialState: {
    status: "checking",
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
    errorMessage: "",
  },
  reducers: {
    login: (state: AuthState, { payload }: { payload: AuthState }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state: AuthState, { payload }: { payload: any }) => {
      state.status = "non-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload;
    },
    checkingCredentials: (state: AuthState) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
