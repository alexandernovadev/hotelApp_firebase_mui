import { doc, getDoc } from "firebase/firestore/lite";
import React from "react";
import { useSelector } from "react-redux";
import { FirebaseDB } from "../../../firebase/config";
import { setHotelActive,setLoad } from "../../../store/hotels/HotelSlice";
import { RootState, useAppDispatch } from "../../../store/store";

export const useGetHotelById = () => {
  const { uid } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  
  const getHotelByID = async (ID: string) => {
  
    const docRef = await doc(FirebaseDB, `${uid}/apphotel/hotels/${ID}`);
    /* @ts-ignore */
    const hotel = await (await getDoc(docRef)).data();

    /* @ts-ignore */
    const two_twin_bedroom = hotel.two_twin_bedroom
      ? { state: true, value: hotel?.two_twin_bedroom }
      : { state: false, value: 0 };

    /* @ts-ignore */
    const one_queen_bedroom = hotel.one_queen_bedroom
      ? { state: true, value: hotel?.one_queen_bedroom }
      : { state: false, value: 0 };

    /* @ts-ignore */
    const single_room = hotel.single_room
      ? { state: true, value: hotel?.single_room }
      : { state: false, value: 0 };

    const HotelFormat = {
      /* @ts-ignore */
      ...hotel,
      roomtypes:{
        two_twin_bedroom,
        one_queen_bedroom,
        single_room,
      }
    };
     /* @ts-ignore */
    delete HotelFormat.two_twin_bedroom
     /* @ts-ignore */
    delete HotelFormat.one_queen_bedroom
     /* @ts-ignore */
    delete HotelFormat.single_room

    console.log(HotelFormat);
    

    dispatch(setHotelActive(HotelFormat));
 

  };

  return {
    getHotelByID,
  };
};
