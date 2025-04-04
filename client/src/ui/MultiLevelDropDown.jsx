import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function MultiLevelDropdown({ menuData, name }) {
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    if (url) navigate(url);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex justify-center items-center flex-col hover:text-blue-500 cursor-pointer hover:underline">
        {name}
        {" ->"}
      </MenuButton>
      <MenuItems className="absolute mt-2 w-48 bg-white shadow-md rounded">
        {menuData?.map((item, index) => (
          <div key={index} className="relative group">
            {item.submenu ? (
              <>
                <button className="w-full px-4 py-2 text-left">
                  {item.name}
                  {" ->"}
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
