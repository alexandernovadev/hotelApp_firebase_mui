import HotelLayout from "../layout/HotelLayout";
import { useParams } from "react-router-dom";
import { useGetHotelById } from "../hooks/useGetHotelById";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { FormHotel } from "../components/FormHotel";

export const EditHotel = () => {
  
  const { active, isLoadingData } = useSelector(
    (state: RootState) => state.hotel
  );

  const [isLoad, setIsLoad] = useState(true);
  const { id } = useParams<string>();
  const { getHotelByID } = useGetHotelById();

  useEffect(() => {
    const getData = async () => {
      await getHotelByID(id);
      setIsLoad(false);
    };
    getData();
  }, []);

  return (
    <HotelLayout title="Editar Hotel">
      <>{isLoad ? "cargando" : <FormHotel initialValues={active} id={id} />}</>
    </HotelLayout>
  );
};
