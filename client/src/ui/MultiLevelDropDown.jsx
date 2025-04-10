import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function MultiLevelDropdown({ menuData, name, setNavShow }) {
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    if (typeof setNavShow === "function") {
      setNavShow(false);
    }
    if (url) navigate(url);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex justify-center items-center flex-row cursor-pointer hover:underline">
        {name}
        <Icon icon="flat-color-icons:expand" width="20" height="20" />
      </MenuButton>
      <MenuItems className="absolute mt-2 w-48 bg-white shadow-md rounded z-50">
        {menuData?.map((item, index) => (
          <div key={index} className="relative group">
            {item.submenu ? (
              <>
                <button className="w-full px-4 py-2 text-left flex hover:bg-gray-200">
                  {item.name}
                  <Icon icon="flat-color-icons:expand" width="20" height="20" />
                </button>
                <div className="absolute left-full top-0 hidden group-hover:block w-40 bg-white shadow-md rounded">
                  {item.submenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="w-full px-4 py-2 hover:bg-gray-200"
                      onClick={() => handleNavigation(subItem.url)}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <MenuItem
                as="button"
                className="w-full px-4 py-2 hover:bg-gray-200"
                onClick={() => handleNavigation(item.url)}
              >
                {item.name}
              </MenuItem>
            )}
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}

export default MultiLevelDropdown;
