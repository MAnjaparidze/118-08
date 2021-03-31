import React from "react";

import RightIco from "../../../../assets/img/right-arrow-icon.png";

export default function Login() {
  return (
    <div className="login-window_wrapper">
      <h3>შესვლა</h3>
      <form className="login-form">
        <input type="email" placeholder="ელ. ფოსტა" />
        <input type="password" placeholder="პაროლი" />
      </form>
      <a href="" className="forgot-password">
        დაგავიწყდა პაროლი?
      </a>
      <button>ავტორიზაცია <img src={RightIco} alt=""/></button>
    </div>
  );
}
