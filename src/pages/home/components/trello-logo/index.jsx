import React from "react";
import LogoImg from "../../../../assets/imgs/logo.png";
import "./index.scss";

export default function TrelloLogo(props) {
  return (
    <div className="logo">
      <img src={LogoImg} alt="logo" />
    </div>
  );
}
