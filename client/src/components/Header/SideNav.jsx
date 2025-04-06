import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultiLevelDropdown from "../../ui/MultiLevelDropDown";
import { Calculator, Products, RaiseTicket } from "../../data/HeaderData";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  headerNavigations1,
  headerNavigations2,
  headerNavigations3,
} from "../../data/headerNavigations";

const optnCss =
  "w-full cursor-pointer text-lg border-2 border-blue-50 text-blue-500 font-extrabold flex py-3 px-6 transform ease-in-out duration-100";
const activeCss =
  "w-full cursor-pointer text-lg border-2 border-black text-black font-extrabold flex py-3 px-6 transform ease-in-out duration-100";

function SideNav({ setNavShow, menuRef, isOpen }) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState("/");
  const navigate = useNavigate();

  const navHandler = (path) => {
    navigate(path);
    setActive(path);
    setNavShow((prev) => !prev);
    // console.log(active)
  };

  return (
    <div ref={menuRef} className="w-full h-screen p-5 flex flex-col bg-blue-50">
      {/* <Icon icon="logos:woocommerce" width={"290"} /> */}
      <div className="text-xl font-extrabold text-blue-500">
        Financial Khidki
      </div>
      <div
        className="absolute text-lg font-semibold top-2 right-1"
        onClick={() => setNavShow(false)}
      >
        X
      </div>
      {/* <div className="text-3xl">
          Let's find you the <span className="font-bold">Best Insurance</span>
        </div> */}
      {/* header middle layer */}
      <div className="flex flex-col justify-start items-start w-full text-black font-semibold p-3 ">
        {/* header nav tab- sm */}

        {headerNavigations1.map((item, key) => {
          return (
            <div
              onClick={() => navigate(`${item.navigate}`)}
              key={key}
              className="flex justify-center items-center flex-col  cursor-pointer hover:underline"
            >
              <div>{item.name}</div>
            </div>
          );
        })}
        <MultiLevelDropdown menuData={Products} name={"Products"} />
        {headerNavigations2.map((item, key) => {
          return (
            <div
              onClick={() => navigate(`${item.navigate}`)}
              key={key}
              className="flex  justify-center items-center flex-col  cursor-pointer hover:underline"
            >
              <div>{item.name}</div>
            </div>
          );
        })}
        <MultiLevelDropdown menuData={Calculator} name={"Calculator"} />
        <MultiLevelDropdown menuData={RaiseTicket} name={"Raise Ticket"} />
        {headerNavigations3.map((item, key) => {
          return (
            <div
              onClick={() => navigate(`${item.navigate}`)}
              key={key}
              className="flex justify-center items-center flex-col  cursor-pointer hover:underline"
            >
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>

      <div className="flex w-full justify-center" id="special_btn">
        <div
          onClick={() => navigate("/help")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex text-sm justify-center items-center flex-row cursor-pointer hover:text-blue-500"
        >
          <Icon icon={"material-symbols:call"} />
          <div className="ml-1">
            {hovered ? "123-456-7890" : "Talk to Expert"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
