import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";

import { FaShoppingBag } from "react-icons/fa";

import { MdOutlineInventory } from "react-icons/md";

import "../../styles/components/Menu.sass";
import { MenuLink } from "../../components";

const menu = [
  { link: "/admin/products", Icon: FaShoppingBag, text: "Products" },
  { link: "/admin/inventory", Icon: MdOutlineInventory,  text: "Inventary",  },
  { link: "/admin/users", Icon: BsFillPersonCheckFill, text: "Users" },
];

const Menu = () => {
  return (
    <div className="Menu">
      <nav>
        <ul>
          {menu.map((item, index) => (
            <MenuLink {...item} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { Menu };
