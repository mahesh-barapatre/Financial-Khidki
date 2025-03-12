import { Icon } from "@iconify/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import serverUrl from "../config";
import headerNavigations from "../data/headerNavigations";
import MultiLevelDropdown from "../ui/MultiLevelDropDown";
import { Calculator, Products } from "../data/HeaderData";
import { useState, useRef, useEffect } from "react";
import { closeHam, toggleHam } from "../store/HamBurgerBtnSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemCount = useSelector((state) => state.cart.total);
  const role = useSelector((state) => state.role.role);

  const isOpen = useSelector((state) => state.hamBtn.isOpen);
  const menuRef = useRef(null);

  // Function to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(closeHam());
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleAuth = () => {
    console.log(role);
    if (role === "") {
      navigate("/login");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      console.log(response);
      location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const iconCss =
    "transform cursor-pointer hover:scale-150 transition-transform duration-300 ease-in-out";

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center shadow-lg py-3 sm:pl-10 w-full fixed top-0 bg-white z-50">
      <div className="w-full sm:w-1/3 pl-5">
        {/* <Icon icon="logos:woocommerce" width={"290"} /> */}
        <div className="text-xl font-extrabold text-blue-500">
          Financial Khidki
        </div>
        <div className="text-3xl">
          Let's find you the <span className="font-bold">Best Insurance</span>
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-3/5">
        <div
          className="flex flex-row justify-end space-x-4 mb-2 mr-8"
          id="special_btn"
        >
          <div
            onClick={() => navigate("/login")}
            className="flex justify-center items-center flex-row hover:text-white cursor-pointer hover:bg-blue-500 text-blue-500 border-solid border-blue-500 border-2 p-1"
          >
            <div>LOGIN</div>
          </div>
          <div
            onClick={() => navigate("/")}
            className="flex justify-center items-center flex-row hover:text-white cursor-pointer hover:bg-blue-500 text-blue-500 border-solid border-blue-500 border-2 p-1"
          >
            <div>BECOME OUR PARTNER</div>
          </div>
        </div>

        {/* Burger Button (Mobile Only) */}
        <button onClick={() => dispatch(toggleHam())} className="md:hidden p-2">
          <Icon
            icon={isOpen ? "mdi:close" : "mdi:menu"}
            width="30"
            height="30"
          />
        </button>

        {/* header nav tab- sm */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row w-full justify-evenly items-center`}
        >
          <MultiLevelDropdown menuData={Calculator} name={"CALCULATOR"} />
          <MultiLevelDropdown menuData={Products} name={"PRODUCTS"} />
          {headerNavigations.map((item, key) => {
            return (
              <div
                onClick={() => navigate(`${item.navigate}`)}
                key={key}
                className="flex justify-center items-center flex-col hover:text-blue-500 cursor-pointer hover:underline"
              >
                <div>{item.name}</div>
              </div>
            );
          })}
          {/* {role === "" ? null : (
          <Icon
            onClick={logout}
            className={iconCss}
            icon="humbleicons:logout"
            width="30"
            height="30"
          />
        )}
        {role === "user" ? null : (
          <Icon
            onClick={handleAuth}
            className={iconCss}
            icon="solar:user-broken"
            width="30"
            height="30"
          />
        )} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
