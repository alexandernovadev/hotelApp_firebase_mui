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
  isLoadingData: boolean,
  messageSaved: string,
  hotels: [],
  active?: Hotel
}

const initialState = {
  isSaving: false,
  isLoadingData: false,
  hotels: [],
  active: {}
} as HotelState

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setSaving: (state, { payload }) => {
      state.isSaving = payload
    },
    setLoad: (state, { payload }) => {
      console.log("Hola ", payload);

      state.isLoadingData = payload
    },
    getHotels: (state, { payload }) => {
      state.hotels = payload;
    },
    setHotelActive: (state, { payload }) => {
      state.active = payload;
    },

  },
});

export const { getHotels, setSaving, setLoad, setHotelActive } = hotelSlice.actions;
