import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const LayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;
