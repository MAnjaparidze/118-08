import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function CurrencyItem({ itemData }) {
  const calcBanksBuy = () => {
    let bankArr = itemData.banks;
    let buyOveral = 0;
    let bankNum = bankArr.length;
    for (let i = 0; i < bankNum; i++) {
      buyOveral += parseFloat(bankArr[i].buy);
    }
    let result = buyOveral / bankNum;
    return Math.round(result * 10000) / 10000;
  };
  const calcBanksSell = () => {
    let bankArr = itemData.banks;
    let sellOveral = 0;
    let bankNum = bankArr.length;
    for (let i = 0; i < bankNum; i++) {
      sellOveral += parseFloat(bankArr[i].sell);
    }
    let result = sellOveral / bankNum;
    return Math.round(result * 10000) / 10000;
  };
  return (
    <>
      <td className="cell-1">
        <Link to="/curr_test">{itemData.name}</Link>
      </td>
      <td className="cell-2">{itemData.code ? itemData.code : ""}</td>
      <td className="cell-3">{itemData.course ? itemData.course : ""}</td>
      <td className="cell-4">
        <div className="buy-sell buy">{itemData.banks && calcBanksBuy()}</div>
        <div className="buy-sell sell">{itemData.banks && calcBanksSell()}</div>
      </td>
      <td className="cell-5">
        <div className="buy-sell buy">{itemData.street_buy_course}</div>
        <div className="buy-sell sell">{itemData.street_sell_course}</div>
      </td>
    </>
  );
}
