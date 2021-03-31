import React, { useState } from "react";
import RightIco from "../../../../assets/img/right-arrow-icon.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function RegisterLegalEntity({toggleRegPage}) {
  const [isChecked, toggleCheck] = useState(false);
  return (
    <div className="register-window">
      <div className="physical-entity-register-link" onClick={() => toggleRegPage(true)}>
        <span>
          მსურს ფიზიკურ
          <br />
          პირად დარეგისტრირება
        </span>
      </div>

      <h2 className="register-page-description">იურიდიული პირის რეგისტრაცია</h2>

      <form className="register-legal-entity-form">
        <input type="email" placeholder="ელ. ფოსტა" />
        <input type="text" placeholder="სახელი" />
        <input type="text" placeholder="გვარი" />
        <input type="tel" placeholder="ტელეფონის ნომერი" />
        <input type="text" placeholder="ორგანიზაციის დასახელება" />
        <input type="number" placeholder="ორგანიზაციის საიდენტიფიკაციო კოდი" />
        <input type="password" placeholder="პაროლი" />
        <input type="password" placeholder="გაიმეორეთ პაროლი" />
        <div className="agreement-on-rules">
          <div className="register-check-square" onClick={() => {toggleCheck(!isChecked)}}>
            {isChecked && <div className="register-check-circle"></div>}
          </div>
          <Link to="">ვეთანხმები წესებსა და პირობებს</Link>
        </div>
        <button type="submit">
          დარეგისტრირება <img src={RightIco} alt="" />
        </button>
      </form>
    </div>
  );
}
