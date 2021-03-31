import React, { useState } from "react";
import RegisterLegalEntity from "./RegisterLegalEntity";
import RegisterPhysicalEntity from "./RegisterPhysicalEntity";
import Login from "./Login";

import "../../../css/parts/Register.css";

export default function Registration() {
  const [isPhysicalReg, toggleRegPage] = useState(false);
  return (
    <div className="register-window_container">
      <div className="register-window_wrapper">
        {isPhysicalReg ? (
          <RegisterPhysicalEntity toggleRegPage={toggleRegPage} />
          
        ) : (
          <RegisterLegalEntity
            toggleRegPage={toggleRegPage}
          />
        )}
      </div>
      <Login />
    </div>
  );
}
