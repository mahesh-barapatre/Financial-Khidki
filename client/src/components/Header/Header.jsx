import { Icon } from "@iconify/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import serverUrl from "../../config";
import {
  headerNavigations1,
  headerNavigations2,
  headerNavigations3,
} from "../../data/headerNavigations";
import MultiLevelDropdown from "../../ui/MultiLevelDropDown";
import { Calculator, Products, RaiseTicket } from "../../data/HeaderData";
import { useState, useRef, useEffect } from "react";
import { closeHam, toggleHam } from "../../store/HamBurgerBtnSlice";
import SideNav from "./SideNav";

function Header() {
  const [hovered, setHovered] = useState(false);
  const [navShow, setNavShow] = useState(false);

  const view = navShow ? "left-0" : "left-[-500px]";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.hamBtn.isOpen);
  const menuRef = useRef(null);

  const iconCss =
    "transform cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out";

  return (
    <div className="flex flex-col h-20 justify-evenly items-center shadow-lg w-full fixed top-0 bg-white z-50 p-3">
      {/* header first layer */}
      <div className="w-full flex justify-between">
        <div
          onClick={() => setNavShow((prev) => !prev)}
          className="fixed sm:hidden z-50 p-2 rounded-full top-4 left-1"
        >
          <Icon
            icon={navShow ? "mdi:close" : "mdi:menu"}
            width="30"
            height="30"
          />
        </div>
        <div
          className={`md:hidden absolute z-50 w-4/5 md:static top-0 md:left-0 transform ease-in-out duration-500 ${view}`}
        >
          <SideNav ref={menuRef} isOpen={navShow} setNavShow={setNavShow} />
        </div>
        {/* <Icon icon="logos:woocommerce" width={"290"} /> */}
        <div className="text-xl ml-12 font-extrabold text-blue-500">
          <img
            onClick={() => navigate("/")}
            src="/images/logo_finan.png"
            className="h-16 w-72 cursor-pointer"
          />
        </div>
        {/* <div className="text-3xl">
          Let's find you the <span className="font-bold">Best Insurance</span>
        </div> */}
        {/* header middle layer */}
        <div className="md:flex hidden flex-col w-full text-black font-semibold p-3 ">
          {/* header nav tab- sm */}
          <div
            className={` hidden
        
             flex-col md:flex md:flex-row w-full justify-evenly items-center`}
          >
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
        </div>
        <div className="flex w-1/3 md:w-1/6 justify-center" id="special_btn">
          <div
            onClick={() => navigate("/help")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex text-sm justify-center items-center flex-row cursor-pointer hover:text-blue-500"
          >
            <Icon
              icon="line-md:phone-call-twotone-loop"
              width="24"
              height="24"
              style={{ color: "#adf9ff" }}
            />
            <div className="md:ml-1">
              {hovered ? "+91 91094 54147" : "Talk to Expert"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
