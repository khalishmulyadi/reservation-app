import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const ButtonBackContinue = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <button className="btn btn-back w-100">Back</button>
        </div>
        <div className="col-6">
          <button className="btn btn-continue w-100">
            Continue <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonBackContinue;
