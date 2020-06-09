import React, { Component } from "react";
import axios from "axios";
import { HeaderTop } from "./Style";

function Header() {
  constructor();
  {
    super();
    this.state = {
      amount: "coming",
    };
  }
  componentDidMount = () => {
    axios.get("/").thin((response) => {
      this.state({
        amount: response.data,
      });
    });
  };
  return (
    <HeaderTop>
      <h2>2500</h2>
    </HeaderTop>
  );
}
export default Header;
