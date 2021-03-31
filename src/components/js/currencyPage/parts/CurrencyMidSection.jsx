import React, { useState, useEffect } from "react";
import MidSectionFirstPanel from "../../organizations/parts/MidSectionFirstPanel";

import SwappIcon from "../../../../assets/img/swap-curr.png";
import ArrowDown from "../../../../assets/img/arrow-down.png";

export default function CurrencyMidSection({ data }) {
  const [firstCoefficient, setfirstCoefficient] = useState(null);
  const [secondCoefficient, setSecondCoefficient] = useState(null);

  const [currToActive, toggleCurrTo] = useState(false);
  const [currFromActive, toggleCurrFrom] = useState(false);

  const [currFromShow, setCurrFromShow] = useState(null);
  const [currToShow, setCurrToShow] = useState(null);

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const [searchItem, setSearchItem] = useState("");
  const [searchToItem, setSearchToItem] = useState("");

  let initFirstCoeff = data && data[0].course;
  let initSecondCoeff = data && data[0].course;

  var optionItemsFrom =
    data &&
    data.map(i => {
      return (
        <div
          key={i.id}
          className="option-item"
          currency={i.course}
          value={`${i.code.toLowerCase()}`}
          onClick={() => {
            setCurrFromShow(`${i.code}`);
            toggleCurrFrom(false);
            setfirstCoefficient(i.course);
            calculate();
          }}
        >
          {i.code} <span>{i.name}</span>
        </div>
      );
    });
  var optionItemsTo =
    data &&
    data.map(i => {
      return (
        <div
          key={i.id}
          className="option-item"
          currency={i.course}
          value={`${i.code.toLowerCase()}`}
          onClick={() => {
            setCurrToShow(`${i.code}`);
            toggleCurrTo(false);
            setSecondCoefficient(i.course);
            calculate();
          }}
        >
          {i.code} <span>{i.name}</span>
        </div>
      );
    });
  let searchOptionItemsFromArray = [];
  let searchOptionItemsFrom =
    data &&
    data.filter(e => {
      if (e.code.includes(searchItem.toUpperCase())) {
        searchOptionItemsFromArray.push(
          <div
            key={e.id}
            className="option-item"
            currency={e.course}
            value={`${e.code.toLowerCase()}`}
            onClick={() => {
              setCurrFromShow(`${e.code}`);
              toggleCurrFrom(false);
              setfirstCoefficient(e.course);
              calculate();
              console.log("Comes here");
            }}
          >
            {e.code} <span>{e.name}</span>
          </div>
        );
      }
    });
  let searchOptionItemsToArray = [];
  let searchOptionItemsTo = () => {
    data &&
      data.filter(e => {
        if (e.code.includes(searchToItem.toUpperCase())) {
          searchOptionItemsToArray.push(
            <div
              key={e.id}
              className="option-item"
              currency={e.course}
              value={`${e.code.toLowerCase()}`}
              onClick={() => {
                setCurrFromShow(`${e.code}`);
                toggleCurrFrom(false);
                setfirstCoefficient(e.course);
                calculate();
              }}
            >
              {e.code} <span>{e.name}</span>
            </div>
          );
        }
      });
  };
  const swappCurr = async () => {
    let temp = firstCoefficient ? firstCoefficient : initFirstCoeff;
    let second = secondCoefficient ? secondCoefficient : initSecondCoeff;
    setfirstCoefficient(second);
    setSecondCoefficient(temp);
    let tempFromShow = currFromShow;
    let tempToShow = currToShow;
    setCurrFromShow(tempToShow);
    setCurrToShow(tempFromShow);

    await calculate();
  };

  const calculate = async () => {
    var fromVal = document.getElementById("from-num").value;

    setFirstValue(fromVal);
    let first = null;
    let second = null;
    let coefficient = null;
    first = firstCoefficient ? firstCoefficient : initFirstCoeff;
    second = secondCoefficient ? secondCoefficient : initSecondCoeff;

    coefficient = first / second;
    let calced = Math.floor(fromVal * coefficient * 10000) / 10000
    setTimeout(()=> {
      console.log("I am helping")
    }, 1000)
    setSecondValue(calced);
    console.log("Done", secondValue);
  };

  return (
    <div className="currency-mid-section_container">
      <MidSectionFirstPanel />

      <div className="midSection__search-panel">
        <h2 className="category-title">ვალუტის კურსი</h2>
      </div>

      <div className="currency-mid_third-panel_container">
        <div className="third-panel-value_container">
          <input
            className="third-panel-value-from"
            defaultValue={firstValue}
            id="from-num"
            onChange={() => {
              calculate();
            }}
          />
          <div className="third-panel-value-middle"></div>
          <div className="third-panel-value-to" id="to-num">
            {secondValue}
          </div>
        </div>

        <div className="third-panel-curr_container">
          <div
            className="third-panel-curr-from"
            id="curr-from"
            onClick={() => {
              toggleCurrFrom(!currFromActive);
              toggleCurrTo(false);
            }}
          >
            {currFromShow === null ? data && data[0].code : currFromShow}
            <div className="drop-down-arrow">
              <img src={ArrowDown} alt="" />
            </div>
          </div>

          <div className="swapp-icon" onClick={() => swappCurr()}>
            <img src={SwappIcon} alt="" />
          </div>

          <div
            className="third-panel-curr-to"
            id="curr-to"
            onClick={() => {
              toggleCurrTo(!currToActive);
              toggleCurrFrom(false);
            }}
          >
            {currToShow === null ? data && data[0].code : currToShow}
            <div className="drop-down-arrow">
              <img src={ArrowDown} alt="" />
            </div>
          </div>

          <div className="curr-dropdown-container">
            {currFromActive && (
              <div className="from-dropdown-wrapper">
                <div className="from-search">
                  <input
                    type="text"
                    onChange={e => setSearchToItem(e.target.value)}
                  />
                </div>
                <div className="option-wrapper">
                  {searchItem === ""
                    ? optionItemsFrom
                    : searchOptionItemsFromArray}
                </div>
              </div>
            )}
            {currToActive && (
              <div className="to-dropdown-wrapper">
                <div className="to-search">
                  <input
                    type="text"
                    onChange={e => setSearchItem(e.target.value)}
                  />
                </div>
                <div className="option-wrapper">
                  {searchItem === "" ? optionItemsTo : searchOptionItemsToArray}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="dimmed-overlay"></div>
    </div>
  );
}
