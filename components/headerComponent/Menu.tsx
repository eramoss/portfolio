import React, { useContext } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HiMenuAlt3,

} from 'react-icons/hi';







const Menu = () => {



  
    



  return (
    <DropdownMenu.Root>
      
      <DropdownMenu.Trigger className='flex items-center gap-1 ' asChild>
        
        <button id='btn-menu' className="IconButton" aria-label="Customise options">
          <label className='' htmlFor="btn-menu">Menu</label>
          <HiMenuAlt3/>
        </button>
      </DropdownMenu.Trigger>
      

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="w-56 absolute md:top-0  -right-12 md:-right-8 rounded-md bg-gray-100 p-2 shadow-md duration-500 transition transform flex flex-col items-center gap-3" sideOffset={5}>
            <a href='#contact' >contact</a>
            <a href="#history">história</a>
            <a href="#project">projetos</a>
            <a href="https://github.com/eramoss">Meus repositórios</a>
          
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Menu;
