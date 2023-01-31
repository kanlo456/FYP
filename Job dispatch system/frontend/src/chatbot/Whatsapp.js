import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=68185790&amp;text=Hello! I want to inquire"
      className="float2"
      draggable="false"
    >
      <i className="fa fa-whatsapp my-float2"></i>
    </a>
  );
};

export default Whatsapp;
