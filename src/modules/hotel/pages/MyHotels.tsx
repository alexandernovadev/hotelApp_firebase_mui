import { border } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { MyHotelCard } from "../components/MyHotelCard";
import { useGetMyHotels } from "../hooks/useGetMyHotels";
import HotelLayout from "../layout/HotelLayout";

export const MyHotels = () => {
  const { getMyHotels } = useGetMyHotels();
  const { hotels, isLoadingData } = useSelector(
    (state: RootState) => state.hotel
  );

  useEffect(() => {
    const data = async () => {
      await getMyHotels();
    };
    data();
  }, []);

  return (
    <HotelLayout title="My Hotels">
      {/* {isLoadingData ? 'Cargando' : 'datos Listo'} */}
      <>
        {!isLoadingData &&
          hotels.map((hotel: any) => <MyHotelCard key={hotel.id} {...hotel} />)}
      </>
    </HotelLayout>
  );
};
