import React from "react";
import { Link } from "react-router-dom";

export const DashHotelPage = () => {
  return (
    <div>
      <h1>DashHotePage</h1>
      <Link to="/auth/login">Login</Link> <br />
      <Link to="/auth/register">Register</Link><br />
      <Link to="/dash">dash</Link><br />
      <Link to="/profile">profile</Link>
    </div>
  );
};
