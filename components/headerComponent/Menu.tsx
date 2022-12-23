import React, { useContext } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiMenuAlt3 } from "react-icons/hi";

const Menu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 " asChild>
        <button
          id="btn-menu"
          className="IconButton"
          aria-label="Customise options"
        >
          <label className="" htmlFor="btn-menu">
            Menu
          </label>
          <HiMenuAlt3 />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-56 absolute md:top-0  -right-12 md:-right-8 rounded-md bg-gray-100 p-2 shadow-md duration-500 transition transform flex flex-col items-center gap-3"
          sideOffset={5}
        >
          <a href="/Curriculo-eduardo-ramos.pdf" download>
            Baixar CV
          </a>
          <a href="https://www.linkedin.com/in/eramoss/">LinkedIn</a>
          <a href="https://github.com/eramoss">Repositórios</a>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Menu;
