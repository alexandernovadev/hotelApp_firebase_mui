import { createSlice, PayloadAction } from "@reduxjs/toolkit";



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
    status: "non-authenticated",
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
    errorMessage: "",
  },
  reducers: {
    login: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = '';
    },
    logout: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
      state.status = "non-authenticated";
      state.uid = '';
      state.email = '';
      state.displayName = '';
      state.photoURL = '';
      state.errorMessage = '';
    },
    checkingCredentials: (state: AuthState) => {
      state.status = "checking";
      state.errorMessage = '';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
