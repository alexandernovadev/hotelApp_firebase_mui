import React from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { getHotels, setLoad } from "../../../store/hotels/HotelSlice";

export const useGetMyHotels = () => {
  const { uid } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const getMyHotels = async () => {
    dispatch(setLoad(true));
    
    const collectionRef = await collection(
      FirebaseDB,
      `${uid}/apphotel/hotels`
    );
    const docs = await getDocs(collectionRef);

    const hotels: any = [];
    docs.forEach((doc) => {
      hotels.push({ id: doc.id, ...doc.data() });
    });

    console.log("My Firebase responde with ", docs);
    console.log("My hotels are ", hotels);
    dispatch(getHotels(hotels));

    dispatch(setLoad(false));
  };

  return {
    getMyHotels,
  };
};
