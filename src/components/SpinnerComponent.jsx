import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <strong role="status">Cargando noticias...</strong>
      <div className="spinner-grow mx-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerComponent;
