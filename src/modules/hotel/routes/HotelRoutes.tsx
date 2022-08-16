import { Route, Routes, Navigate } from "react-router-dom";
import { DashHotelPage } from "../pages/DashHotelPage";
import { MiProfile } from "../pages/MiProfile";

export const HotelRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DashHotelPage />} />
      <Route path="profile" element={<MiProfile />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
