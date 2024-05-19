import React, { useEffect, useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { NavLink } from "react-router-dom";
// import { useAuthenticatedFetch } from "../hooks";

export const TopBar = () => {
  // let fetch = useAuthenticatedFetch();
  // let [storeName, setStoreName] = useState("");

  // useEffect(async () => {
  //   try {
  //     let request = await fetch("/api/store/info", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     let response = await request.json();
  //     setStoreName(response.data[0].name);
  //     // console.log(response.data[0].name);
  //     // console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  return (
    <div className="topbar-section">
      <div className="logo-block">
        <LocalOfferIcon />
        <h1 className="text-bold h4">DevXl</h1>
        <NavLink to="/">Sales</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </div>
  );
};
