import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  function ret() {
    setTimeout(() => {
      navigate("/");
    }, 800);
  }
  return (
    <>
      <div>Sorry no such page found.</div>
      {ret()}
    </>
  );
};

export default Error;
