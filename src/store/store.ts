import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { authSlice } from "./auth/AuthSlice";
import { hotelSlice } from "./hotels/HotelSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    hotel: hotelSlice.reducer
  },
});

// Fuck config to use dispach with TS
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

