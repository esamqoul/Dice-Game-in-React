import React, { Component } from "react";
import { HeaderTop } from "./Style";

function Header({ userBalance }) {
  return (
    <HeaderTop>
      <h2>{userBalance}</h2>
    </HeaderTop>
  );
}
export default Header;
