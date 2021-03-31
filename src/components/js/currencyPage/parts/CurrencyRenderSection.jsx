import React from "react";
import SearchIcon from "../../../../assets/img/search-blk.png";
import CurrencyItem from "./CurrencyItem";
import Loader from "react-loader-spinner";

export default function CurrencyRenderSection({ data, searchCurr }) {
  const content = data ? (
    <div className="currency-render-section_wrapper">
      <div className="currency-inner-search_container">
        <div className="currency-inner-search_wrapper cell-1">
          <img src={SearchIcon} alt="" className="currency-inner-search-icon" />
          <input
            type="text"
            className="currency-inner-search"
            placeholder="ყველა ვალუტა"
            onChange={e => searchCurr(e.target.value)}
          />
        </div>
        <div className="currency-search-grid-cell cell-2">
          <div className="currency-inner-div">ეროვნული ბანკი</div>
        </div>
        <div className="currency-search-grid-cell cell-3">
          <div className="currency-inner-div">კომერციული ბანკები</div>
        </div>
        <div className="currency-search-grid-cell cell-4">
          <div className="currency-inner-div">ჯიხურები</div>
        </div>
      </div>

      <table className="currency-table">
        <thead>
          <tr className="currency-table-headers">
            <th className="cell-1">ვალუტა</th>
            <th className="cell-2">კოდი</th>
            <th className="cell-3">კურსი</th>
            <th className="cell-4">
              <div className="buy-sell">ყიდვა</div>
              <div className="buy-sell">გაყიდვა</div>
            </th>
            <th className="cell-5">
              <div className="buy-sell">ყიდვა</div>
              <div className="buy-sell">გაყიდვა</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(e => {
            return (
              <tr className="currency-item_wrapper" key={e.id}>
                <CurrencyItem itemData={e} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
  );
  return <div className="currency-render-section_container">{content}</div>;
}
