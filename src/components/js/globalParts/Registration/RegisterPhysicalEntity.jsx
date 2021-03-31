import React, { useState } from "react";
import RightIco from "../../../../assets/img/right-arrow-icon.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

import gIco from '../../../../assets/img/g-plus.png'
import fbIco from '../../../../assets/img/facebook-ico.svg'

export default function RegisterPhysicalEntity({ toggleRegPage }) {
  const [isChecked, toggleCheck] = useState(false);
  return (
    <div className="register-window">
      <div
        className="physical-entity-register-link"
        onClick={() => toggleRegPage(false)}
      >
        <span>
          მსურს იურიდიულ
          <br />
          პირად დარეგისტრირება
        </span>
      </div>

      <h2 className="register-page-description">ფიზიკური პირის რეგისტრაცია</h2>

      <form className="register-legal-entity-form">
        <input type="email" placeholder="ელ. ფოსტა" />
        <input type="text" placeholder="სახელი" />
        <input type="text" placeholder="გვარი" />
        <input type="password" placeholder="პაროლი" />
        <input type="password" placeholder="გაიმეორეთ პაროლი" />
        <div className="agreement-on-rules">
          <div
            className="register-check-square"
            onClick={() => {
              toggleCheck(!isChecked);
            }}
          >
            {isChecked && <div className="register-check-circle"></div>}
          </div>
          <Link to="">ვეთანხმები წესებსა და პირობებს</Link>
        </div>
      </form>
      <div className="register-physical-second-nav">
        <div className="horizontal-line"></div>
        <span className="register-physical-second-nav-text">ან</span>
        <div className="horizontal-line"></div>
      </div>
      <div className="register-by-socials">
        <div className="register-by-fb">
          <img src={fbIco} alt="" /> Facebook-ით რეგისტრაცია
        </div>
        <div className="register-by-g">
          <img src={gIco} alt="" /> Google-ით რეგისტრაცია
        </div>
      </div>
      <button type="submit">
        დარეგისტრირება <img src={RightIco} alt="" />
      </button>
    </div>
  );
}
