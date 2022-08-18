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

  /*
  
  1:
country: "Estado Unidos"
department: "Cundinamarca"
description: "The best option to take a vacation, with many places where you and your family can shrare the best momment, there are many partys and events that changue your way to think, Come here and enjoy with ud"
id: "TxN6rFGxebmjxaamQGOw"
images: (7) ['https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799535/vaovahotels/gagqxunfihoduxpbago9.jpg', 'https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799543/vaovahotels/y7vqvehdewgymcuf9fuf.jpg', 'https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799541/vaovahotels/p3jef5esmomyqm3yatpl.jpg', 'https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799541/vaovahotels/ashhixvkwdh9dgbbwwfg.jpg', 'https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799554/vaovahotels/hj4ergs4axvvd9lamrsh.jpg', 'https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799553/vaovahotels/vfc4h9rbv7b7fzx0kwsr.jpg', 'https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799555/vaovahotels/ih07obnqxc6acybmn5sf.jpg']
logo: "https://res.cloudinary.com/dv8wurqdp/image/upload/v1660799419/vaovahotels/md88kdeg0xcpqogjqm1m.png"
municipality: "La Santillana"
name: "Eco Hotels Resort"
one_queen_bedroom: 520
score: "5"
single_room: 120
two_twin_bedroom: 120
type_hotel: 5*/
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
