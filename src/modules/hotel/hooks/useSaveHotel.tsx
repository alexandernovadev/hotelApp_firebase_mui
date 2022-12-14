import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { useSelector } from "react-redux";
import { FirebaseDB } from "../../../firebase/config";
import { setSaving } from "../../../store/hotels/HotelSlice";
import { RootState, useAppDispatch } from "../../../store/store";

export const useSaveHotel = () => {
  const { uid } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();


  const saveHotel = async (hotel: any) => {
    dispatch(setSaving(true));

    // Format to save to firebase
    const newHotel = {
      ...hotel,
      one_queen_bedroom: hotel.roomtypes.one_queen_bedroom.state
        ? hotel.roomtypes.one_queen_bedroom.value
        : null,
      single_room: hotel.roomtypes.single_room.state
        ? hotel.roomtypes.single_room.value
        : null,
      two_twin_bedroom: hotel.roomtypes.two_twin_bedroom.state
        ? hotel.roomtypes.two_twin_bedroom.value
        : null,
    };
    delete newHotel.roomtypes

    const newDoc = doc(collection(FirebaseDB, `${uid}/apphotel/hotels`));
    await setDoc(newDoc, newHotel);

    newHotel.id = newDoc.id;
    dispatch(setSaving(false));
  };

  return {
    saveHotel,
  };
};
