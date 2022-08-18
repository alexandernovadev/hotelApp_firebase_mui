import { createSlice } from "@reduxjs/toolkit";

interface Hotel {
  id?: string;
  name: string;
  description: string;
  country: string;
  departament: string;
  municipality: string;
  logo: string;
  type_hotel: 3 | 4 | 5;
  score: number;
  roomtypes: RoomType[]
  images: string[]
}
interface RoomType {
  typeRoom: "Two twin bedroom" | "Single room" | 'One queen bedroom';
  rooms_available: number;
}
interface HotelState {
  isSaving: boolean,
  messageSaved: string,
  hotels: [],
  active?: Hotel
}

const initialState = {
  isSaving: false,
  messageSaved: "",
  hotels: [],
  active: {}
} as HotelState

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setSaving: (state, { payload }) => {
      console.log("Como es ?", payload);

      state.isSaving = payload
    },
    saveHotel: (state, { payload }) => {
      // state.status = "authenticated";
      // state.uid = payload.uid;
      // state.email = payload.email;
      // state.displayName = payload.displayName;
      // state.photoURL = payload.photoURL;
      // state.errorMessage = '';
    },

  },
});

export const { saveHotel, setSaving } = hotelSlice.actions;
