import React from "react";
import { Menu, Meta } from "../assets/images";
export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src={Meta}
        alt="meta"
        style={{
          width: 85,
          height: 85,
        }}
      />
      <img
        src={Menu}
        alt="menu"
        style={{
          width: 40,
          height: 40,
        }}
      />
    </div>
  );
};
