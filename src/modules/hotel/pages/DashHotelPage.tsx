import React from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../../auth/hooks/useLogOut";

export const DashHotelPage = () => {

  const {logOutFire} = useLogOut()
  return (
    <div>
      <h1>DashHotePage</h1>
      <Link to="/auth/login">Login</Link> <br />
      <Link to="/auth/register">Register</Link><br />
      <Link to="/dash">dash</Link><br />
      <Link to="/profile">profile</Link> <br />
      <button onClick={logOutFire}>LogOut</button>
    </div>
  );
};
