import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=68185790&amp;text=Hello! I want to inquire"
      class="float2"
      draggable="false"
    >
      <i class="fa fa-whatsapp my-float2"></i>
    </a>
  );
};

export default Whatsapp;