import React, { useContext } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsArrowDownSquare } from "react-icons/bs";
import { GiCloudDownload } from "react-icons/gi";

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
          className="w-56 absolute md:top-0 border-collapse -right-12 md:-right-8 rounded-md bg-gray-100  shadow-md duration-500 transition-all transform flex flex-col items-center "
          sideOffset={5}
        >
          <a
            href="/Curriculo-eduardo-ramos.pdf"
            download
            className="flex items-center w-full hover:bg-gray-300 py-3 px-5 rounded-t  transition-all"
          >
            <label className="text-gray-600 text-xl mr-2" htmlFor="curriculo">
              <GiCloudDownload />
            </label>
            <div id="curriculo">Baixar CV</div>
          </a>
          <a
            href="https://www.linkedin.com/in/eramoss/"
            className="flex items-center w-full hover:bg-gray-300 px-5 py-3  transition-all"
          >
            <label className="text-gray-600 text-xl mr-2" htmlFor="linkedin">
              <BsLinkedin />
            </label>
            <div id="linkedin">LinkedIn</div>
          </a>

          <a
            href="https://github.com/eramoss"
            className="flex items-center w-full hover:bg-gray-300 px-5 py-3 rounded-b  transition-all"
          >
            <label className="text-gray-600 text-xl mr-2" htmlFor="github">
              <BsGithub />
            </label>
            <div id="github">Repositórios</div>
          </a>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Menu;
